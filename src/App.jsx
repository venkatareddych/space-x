import React from 'react';
import Header from './Components/Header/Header';
import LaunchesList from './Components/LaunchesList/LaunchesList';
import LaunchView from './Components/LaunchView/LaunchView';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './style.css';

function App() {
  return (
    <div className="App">

    <Router>
        <Header/>
        <Switch>
            <Route path="/launch/:flight_number">
                <LaunchView/>
            </Route>
            <Route path="/"> 
              <LaunchesList/>
            </Route>
        </Switch>
         </Router>

      </div>
   
  );
}

export default App;
  