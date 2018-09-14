import React, { Component } from 'react';

class Forecast extends Component {
  // Constructor
  constructor(props){
    super(props);
    this.state = {
      city: null,
      forecasts: []
    };
  }

  // Call services
  componentDidMount(){
    fetch("http://localhost:3001/weather-data")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            city: result.city,
            forecasts: result.forecasts
          });
        }
      )
  }

  // Render
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">{this.state.city}</div>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Weather</th>
                    <th>Temperature &#8451;</th>
                    <th>precipitation</th>
                    <th>Humidity</th>
                    <th>Wind</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.forecasts.map((forecast, id) => {
                    return (
                      <tr key={id}>
                        <td>{forecast.dayOfWeek}</td>
                        <td>{forecast.weather}</td>
                        <td>{forecast.temp}</td>
                        <td>{forecast.precipitation}</td>
                        <td>{forecast.humidity}</td>
                        <td>{forecast.wind}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default Forecast;
