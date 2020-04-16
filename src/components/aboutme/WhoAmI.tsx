import React  from "react";

import "../../styles/aboutme/WhoAmI.scss";

export default class WhoAmI extends React.Component {
  render () {
    return (
      <div className="whoami">
        <h1 className="tittle">About me!</h1>
        <div className="main-content">
          <span>
            <p>
              Hi! My name is Harman Kharoud. I'm a Software developer, living in Vancouver, Bristish Columbia.
              I went to Vancouver Film School and studied Software Development in 2014-2015. I enjoy learning new 
              stuff everyday. I'm also really passionate about Physics and Astronomy. I have more Physics
              books than Software Development.
            </p>
            <p>
              I've worked on Front-End Web Development for 4 years. Over the 4 year of time period of Software 
              Development, I've also self taught some hardware development. I've built multiple project using &nbsp; 
              <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">Arduino</a>,&nbsp; 
              <a href="https://randomnerdtutorials.com/security-access-using-mfrc522-rfid-reader-with-arduino/" 
                 target="_blank" 
                 rel="noopener noreferrer">
                   MFRC522
              </a>,&nbsp; 
              <a href="https://www.sparkfun.com/datasheets/Components/nRF24L01_prelim_prod_spec_1_2.pdf"
                 target="_blank"
                 rel="noopener noreferrer">
                   nRF24L01
              </a>,&nbsp; 
              <a href="https://github.com/esp8266/Arduino"
                 target="_blank"
                 rel="noopener noreferrer">
                   ESP8266
              </a>,&nbsp; 
              <a href="https://www.espressif.com/en/products/hardware/esp32/overview"
                 target="_blank"
                 rel="noopener noreferrer">
                   ESP32
                </a> wifi modules. 
            </p>
            <p>
              More coming soon...
            </p>
          </span>
        </div>
      </div>
    )
  }
}