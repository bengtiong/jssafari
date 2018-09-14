import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Forecast from './forecast';
import Warning from './warning';
import About from './about';
    
class WeatherRouter extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Forecast}></Route>
        <Route exact path="/forecast" component={Forecast}></Route>
        <Route exact path="/Warning" component={Warning}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
      </Router>
    );
  }
}

export default WeatherRouter;
