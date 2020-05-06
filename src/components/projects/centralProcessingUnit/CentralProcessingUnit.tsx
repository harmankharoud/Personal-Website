import React from "react";

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

import { 
    ICPUProps, 
    ICPUState } 
  from "../../../interface/projects/centralProcessingUnit/ICentralProcessingUnit";

import Clock from "./Clock";
import SelectCPUInput from "./SelectCPUInput";
import IntegerInputFields from "./IntegerInputFields";

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
    if (this.state.selectedInputStyle === "numbers") return <IntegerInputFields></IntegerInputFields>
    return this.loadTextInput()
  }

  render () {    
    return (
      <div className="cpu">
        <section className="cpu__heading">
          <h2>How CPU works?</h2>
        </section>
        <section className="cpu__main-content">
          <span>
            To demonstrate how CPU works, we need couple of things,
            <ul>
              <li>
                <span><b>Input (Keyboard, Mic, Camera, Sensors, Gyroscropes, and more)</b></span>
                <ul>
                  <li>
                    <span>In our case it would from Keyboard</span>
                  </li>
                </ul>
              </li>
              <li>
                <span><b>Process (ALU and Control Unit)</b></span>
                <ul>
                  <li>
                    <span>
                      We will create ALU and Control Unit. <br/>
                      We also need some sort of memory device. Store data and fetch data. <br/>
                      For that we'll create a RAM as in a simple grid of bunch of addressess.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span><b>Output (Monitors, Speakers, and more)</b></span>
                <ul>
                  <li>
                    <span>In our case, it would be a monitor.</span>
                  </li>
                </ul>
              </li>
            </ul>
          </span>

          <h2>
            Input
          </h2>

          <SelectCPUInput selectedInput={this.updateSelectedCPUInput}></SelectCPUInput>

          {
            this.renderInputTypes()
          }   
          <p>
            Every CPU has a clock, lets make a clock first.
          </p>          
          <div className="start">
            {this.renderPlayButton()}         
            <ArrowBackRoundedIcon className="play-button" onClick={this.goBack}></ArrowBackRoundedIcon>   
            <ArrowForwardRoundedIcon className="play-button" onClick={this.goForward}></ArrowForwardRoundedIcon>
            <div className="start__seconds">
              <h2>({this.state.currentTime / 52} seconds)</h2>
            </div>
          </div>

          <Clock runCPU={(callback) => this.callBack = callback} currentTime={this.updateCurrentTime}></Clock>       

          <div className="output-from-cpu">
            <span>
              {
                this.cpuOutput()
              }
            </span>
          </div>
        </section>
        <section>Work in progress...</section>
        <section className="cpu__sources">Sources:&nbsp;</section>
      </div>
    )
  }
};