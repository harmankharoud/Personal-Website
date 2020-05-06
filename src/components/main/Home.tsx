import React from "react";

import "../../styles/main/Home.scss";

import cpu from "../../images/CPU.png";
import xor from "../../images/XOR.svg";
import nand from "../../images/NAND.svg";
import or from "../../images/OR.svg";
import and from "../../images/AND.svg";
import nor from "../../images/NOR.svg";
import not from "../../images/NOT.svg";

export default class Home extends React.Component {
  
  private onMouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>):void => {
    e.currentTarget.classList.add("shake");
  }

  private onMouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>):void => {
    e.currentTarget.classList.remove("shake");
  }


  render() {
    return (
      <div className="home">
        <section className="home__background">
          <img className="cpu" src={cpu} alt="background"></img>
          <span>Discovering</span>
          <span>new</span>
          <span>neural</span>
          <span>pathways</span>
          <img onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gates xor" src={xor} alt="xor"></img>
          <img onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gates nand" src={nand} alt="nand"></img>
          <img onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gates or" src={or} alt="or"></img>
          <img onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gates and" src={and} alt="and"></img>
          <img onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gates nor" src={nor} alt="nor"></img>
          <img onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="gates not" src={not} alt="not"></img>
        </section>
      </div>
    )
  }
}