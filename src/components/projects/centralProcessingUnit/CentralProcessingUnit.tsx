import React from "react";

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

import TextField from '@material-ui/core/TextField';

import { 
    ICPUProps, 
    ICPUState } 
  from "../../../interface/projects/centralProcessingUnit/ICentralProcessingUnit";

import Clock from "./Clock";
import SelectCPUInput from "./SelectCPUInput";

import "../../../styles/projects/CPU.scss";

export default class CentralProcessingUnit extends React.Component<ICPUProps, ICPUState> {

  constructor (props: ICPUProps) {
    super(props);
    this.state = {
      currentTime: 0,
      runningCPU: false,
      selectedInputStyle: "numbers"
    }
  }

  private callBack = (isReset?: boolean, isPausing?: boolean, isSingleStepping?: number):void => {};

  private runCPU = ():void => {
    this.setState({
      runningCPU: true
    });
    if (!this.state.runningCPU) this.callBack(false)
  }

  private pauseCPU = ():void => {
    this.setState({
      runningCPU: false
    });
    this.callBack(false, true)
  }

  private reSetCPU = () => {
    this.callBack(true);
    this.setState({
      currentTime: 0,
      runningCPU: false
    });
  }

  private goBack = (): void => {
    this.state.currentTime !== 0 ? this.callBack(false, false, 2) : this.callBack(true);
  }

  private goForward = (): void => {
    this.callBack(false, false, 1);
  }

  private updateCurrentTime = (time: number) => {
    this.setState({
      currentTime: time
    });
  }

  private cpuOutput = ():number => {
    return 0;
  }

  private updateSelectedCPUInput = (inputType: string) => {
    this.setState({
      selectedInputStyle: inputType
    })
  }

  private renderPlayButton = ():JSX.Element => {
    if (this.state.currentTime > 1091) {
      return <RotateLeftRoundedIcon className="play-button" onClick={this.reSetCPU}></RotateLeftRoundedIcon>
    }
    if(this.state.runningCPU) {
      return <PauseCircleOutlineRoundedIcon className="play-button" onClick={this.pauseCPU}></PauseCircleOutlineRoundedIcon>
    }
    return <PlayCircleOutlineRoundedIcon className="play-button" onClick={this.runCPU}></PlayCircleOutlineRoundedIcon>
  }

  private loadNumbersInputs = ():JSX.Element => {
    const textProps = {
      maxLength: 1
    }
    return (
      <div className="numbers">
        <TextField 
          variant="outlined"
          className="num-1" 
          placeholder="X"
          color="secondary"
          defaultValue="9"
          inputProps={textProps}></TextField>
        <span>+</span>
        <TextField 
          variant="outlined"
          className="num-2" 
          placeholder="X" 
          color="secondary"
          defaultValue="9"
          inputProps={textProps}></TextField>
      </div>
    )
  }

  private loadTextInput = ():JSX.Element => {
    return (
      <div className="characters">
        Coming soon...
        {/* <TextField 
          className="input" 
          placeholder="ABC" 
          inputProps = {{
            maxLength: 12
          }}></TextField> */}
      </div>
    )
  }

  private renderInputTypes = ():JSX.Element => {
    if (this.state.selectedInputStyle === "numbers") return this.loadNumbersInputs()
    return this.loadTextInput()
  }

  render () {    
    return (
      <div className="cpu">
        <section className="cpu__heading">
          <h2>CPU</h2>
        </section>
        <section className="cpu__main-content">
          <span>
            Lets make a simple 8 bit cpu based on the manual below:
          </span>
          <p>
            Every CPU has a clock, lets make a clock first.
          </p>          
          <div className="start">
            {this.renderPlayButton()}         
            <ArrowBackRoundedIcon className="play-button" onClick={this.goBack}></ArrowBackRoundedIcon>   
            <ArrowForwardRoundedIcon className="play-button" onClick={this.goForward}></ArrowForwardRoundedIcon>
          </div>

          <Clock runCPU={(callback) => this.callBack = callback} currentTime={this.updateCurrentTime}></Clock>

          <SelectCPUInput selectedInput={this.updateSelectedCPUInput}></SelectCPUInput>

          {
            this.renderInputTypes()
          }          

          <div className="output-from-cpu">
            <span>
              {
                this.cpuOutput()
              }
            </span>
          </div>
        </section>
        <section>Work in progress...</section>
        <section className="cpu__sources">Sources:&nbsp;
          <a href="http://www.zilog.com/appnotes_download.php?FromPage=DirectLink&dn=UM0077&ft=User%20Manual&f=YUhSMGNEb3ZMM2QzZHk1NmFXeHZaeTVqYjIwdlpHOWpjeTlWVFRBd056Y3VjR1Jt" target="_blank" rel="noopener noreferrer">
            CPU user manual
          </a>
        </section>
      </div>
    )
  }
};