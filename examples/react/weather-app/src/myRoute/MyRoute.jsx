import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from '../container/welcome/Welcome';
import Forecast from '../container/forecast/Forecast';
    
const MyRoute = () => {
    return (
        <Router>
        <Switch>
           <Route exact path="/welcome" component={Welcome}></Route>
           <Route exact path="/forecast" component={Forecast}></Route>
        </Switch>
        </Router>
    )
}

export default MyRoute;