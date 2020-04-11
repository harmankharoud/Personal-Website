import React from "react";
import "../../styles/footer/Footer.scss"

export default class Footer extends React.Component {
  private getCurrentYear = ():number => {
    const date = new Date();
    return date.getFullYear();
  }
  render() {
    return (
      <div className="footer">
        <section className="footer__website-name">
          <span>&copy; {this.getCurrentYear()} Harman Kharoud</span>
        </section>
      </div>
    )
  }
}