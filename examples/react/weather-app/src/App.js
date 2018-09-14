import React, { Component } from 'react';
import Navbar from './navigation-bar';
import WeatherRouter from './weatherrouter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <WeatherRouter></WeatherRouter>
      </div>
    );
  }
}

export default App;
