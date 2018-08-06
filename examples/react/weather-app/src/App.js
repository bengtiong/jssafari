import React, { Component } from 'react';
import './assets/styles/style.css';
import MyRoute from './myRoute/MyRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
        <MyRoute />
        </div>
      </div>
    );
  }
}

export default App;
