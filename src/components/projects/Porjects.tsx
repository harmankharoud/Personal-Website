import React from "react";
import { Link } from 'react-router-dom';

import "../../styles/projects/Projects.scss"
import folder from "../../images/FOLDER.png"

export default class Projects extends React.Component {
  render() {
    return (
      <section className="projects">
        <h1>Currently Learning</h1>
        <div className="projects__folders-list">
          <Link className="central-processing-unit projects-folders" to="/projects/centralProcessingUnit">
            <img className="folder" src={folder} alt="folder"></img>
            <span>Central Processing Unit</span>
          </Link>       
        </div>
      </section>
    )
  }
}