import React from "react";

import "../../../styles/projects/CPU.scss"

export default class CentralProcessingUnit extends React.Component {


  render () {
    
    return (
      <div className="cpu">
        <section className="cpu__heading">
          <h2>CPU</h2>
        </section>
        <section className="cpu__sources">Sources:&nbsp;
          <a href="https://bob.cs.sonoma.edu/IntroCompOrg-x64/bookch6.html" target="_blank" rel="noopener noreferrer">https://bob.cs.sonoma.edu/IntroCompOrg-x64/bookch6.html</a>
        </section>
      </div>
    )
  }
};