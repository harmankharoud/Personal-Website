import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Projects from "./components/projects/Porjects";

import CenteralProcessingUnit from "./components/projects/centralProcessingUnit/CentralProcessingUnit";
import WhoAmI from "./components/aboutme/WhoAmI";

import Footer from "./components/footer/Footer";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="main-body">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/whoami" component={WhoAmI}></Route>
              <Route exact path="/projects/centralProcessingUnit" component={CenteralProcessingUnit}></Route>
            </Switch>
          </div>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
