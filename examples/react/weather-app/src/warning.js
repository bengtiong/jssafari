import React, { Component } from 'react';
import './warning.css';

class Warning extends Component {
  // Constructor
  constructor(props){
    super(props);
    this.state = {
      city: null,
      warnings: []
    };
  }

  // Call services
  componentDidMount(){
    fetch("http://localhost:3001/warning-data")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            city: result.city,
            warnings: result.warnings
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
                      <th>Alert</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.warnings.map((warning, id) => {
                      return (
                        <tr key={id}>
                          <td className={warning.alertLevel}>
                            <i className="fa fa-exclamation-triangle fa-2x" aria-hidden="true"></i>
                          </td>
                          <td>{warning.description}</td>
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

export default Warning;
