import React, {Component} from 'react';
import '../../assets/styles/style.css';

class Forecast extends Component {
    state = {
        data: null,
        weatherData: null
    }
    componentDidMount () {
        fetch('http://localhost:3000/warning').then(function (response) {
        return response.json();
    }).then(data => { this.setState({ data }) })

    fetch('http://localhost:3000/weather').then(function (response) {
        return response.json();
    }).then(weatherData => { this.setState({ weatherData }) }
);
}
    render() {
    return (
        <div>
            <h1>Weather Forecast</h1>
            <p>Sample weather forecast will appear here.</p>

             <h2>Warning</h2>
             <div>
      {
        this.state.data && this.state.data.map((warning,index) => <div key={index} className={warning.red ? 'warningRed' : 'warningYellow'}> Warning: {warning.description}</div>)
      }
      </div>
      <h2>Weather</h2>
      <div>
      {
        this.state.weatherData && this.state.weatherData.map((weather,index) => <div key={index} className={weather.rainy ? 'weather' : 'weather sunny'}>
        <h4>{weather.city}</h4>
        <div>{weather.temp}</div>
        <div className={weather.rainy ? 'Rainy' : 'Sunny'}></div>
        </div>)
      }
      </div>
  </div>
    
      
    );
}
}

export default Forecast;