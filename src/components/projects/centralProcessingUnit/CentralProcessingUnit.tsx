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

import "../../../styles/projects/CPU.scss";

export default class CentralProcessingUnit extends React.Component<ICPUProps, ICPUState> {

  constructor (props: ICPUProps) {
    super(props);
    this.state = {
      currentTime: 0,
      runningCPU: false
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

  private renderPlayButton = ():JSX.Element => {
    if (this.state.currentTime > 1091) {
      return <RotateLeftRoundedIcon className="play-button" onClick={this.reSetCPU}></RotateLeftRoundedIcon>
    }
    if(this.state.runningCPU) {
      return <PauseCircleOutlineRoundedIcon className="play-button" onClick={this.pauseCPU}></PauseCircleOutlineRoundedIcon>
    }
    return <PlayCircleOutlineRoundedIcon className="play-button" onClick={this.runCPU}></PlayCircleOutlineRoundedIcon>
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