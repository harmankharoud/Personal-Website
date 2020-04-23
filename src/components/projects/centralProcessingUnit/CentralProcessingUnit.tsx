import React from "react";
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';

import { 
    ICPUProps, 
    ICPUState } 
  from "../../../interface/projects/centralProcessingUnit/ICentralProcessingUnit";

import Clock from "./Clock";

import "../../../styles/projects/CPU.scss";

export default class CentralProcessingUnit extends React.Component<ICPUProps, ICPUState> {

  private interval: any;

  constructor (props: ICPUProps) {
    super(props);
    this.state = {
      currentTime: 0
    }
  }

  private callBack = (isRestart?: boolean):void => {};

  private runCPU = ():void => {
    this.callBack(false);
  }

  private updateCurrentTime = (time: number) => {
    this.setState({
      currentTime: time
    });
  }

  private reRunCPU = () => {
    this.callBack(true);
    this.setState({
      currentTime: 0
    });
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
            <span>{this.state.currentTime === 1144 ? "Re-Start" : "Start"}</span>
            {
            this.state.currentTime === 1144 ?
              <RotateLeftRoundedIcon className="play-button" onClick={this.reRunCPU}></RotateLeftRoundedIcon> :
              <PlayCircleOutlineRoundedIcon className="play-button" onClick={this.runCPU}></PlayCircleOutlineRoundedIcon>
            }
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