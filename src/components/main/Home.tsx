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
  render() {
    return (
      <div className="home">
        <section className="home__background">
          <img className="cpu" src={cpu} alt="background"></img>
          <span>Discovering</span>
          <span>new</span>
          <span>neural</span>
          <span>pathways</span>
          <img className="gates xor" src={xor} alt="xor"></img>
          <img className="gates nand" src={nand} alt="nand"></img>
          <img className="gates or" src={or} alt="or"></img>
          <img className="gates and" src={and} alt="and"></img>
          <img className="gates nor" src={nor} alt="nor"></img>
          <img className="gates not" src={not} alt="not"></img>
        </section>
      </div>
    )
  }
}