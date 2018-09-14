import React from 'react';
import '../../assets/styles/style.css';
import {NavLink} from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the Weather Hubs</h1>
             <p>This is a sample app to demonstrate the ember application.</p>

          <p>
              <NavLink className="forecastBtn" to="/forecast">Weather forecast</NavLink>
          </p>
             
        </div>

    )
}

export default Welcome;