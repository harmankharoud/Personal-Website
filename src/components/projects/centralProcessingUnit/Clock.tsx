import React from "react";
import Draggable from 'react-draggable';

import { IClockProps, IClockState } from "../../../interface/projects/centralProcessingUnit/IClock";

export default class Clock extends React.Component<IClockProps, IClockState> {

  private interval: any;

  constructor (props: IClockProps) {
    super(props);
    this.state = {
      clockIncerementTics: {x: 0, y: 0}
    }
  }

  private renderClock = ():JSX.Element[] => {
    return [...Array(22)].map((i, index) => <div className="seconds" key={index}></div>)
  }

  private tick = ():void => {
    if (this.state.clockIncerementTics.x >= 1050) clearInterval(this.interval);

    this.setState({
      clockIncerementTics : {
        x: this.state.clockIncerementTics.x + 52, 
        y: 0
      }
    });

    this.props.currentTime(this.state.clockIncerementTics.x);
  }

  private runCPU = ():void => {
    if (this.state.clockIncerementTics.x <= 1050) {
      this.interval = setInterval(() => this.tick(), 100);
    }
  }

  private pauseCPU = (): void => {
    clearInterval(this.interval);
  }



  private handleDrag = (e: any, ui: any):void => {
    this.setState({
      clockIncerementTics: {
        x: this.state.clockIncerementTics.x + ui.deltaX, 
        y: this.state.clockIncerementTics.y + ui.deltaY
      }
    });

    this.props.currentTime(this.state.clockIncerementTics.x);

    clearInterval(this.interval);
  }

  private regiesterCallBack = (isReset?: boolean, isPausing?: boolean):void => {
    if(isPausing) {
      this.pauseCPU();
      return
    }
    if(isReset) {
      this.setState({
        clockIncerementTics: {
          x: 0,
          y: 0
        }
      });
      return
    }
    this.runCPU();
  }

  public componentDidMount = ():void => {
    this.props.runCPU(this.regiesterCallBack);
  }

  render () {
    return (
      <div className="clock">
        <Draggable 
          axis="x"
          bounds={{top: 0, left: 0, right: 1144, bottom: 0}}
          grid={[52, 52]}
          position={this.state.clockIncerementTics}
          onDrag={this.handleDrag}>
            <div 
              className={`clock__tics`}
              >
            </div>
        </Draggable>
        <div className="clock__pulses">
          {this.renderClock()}
        </div>
      </div>
    )
  }
}