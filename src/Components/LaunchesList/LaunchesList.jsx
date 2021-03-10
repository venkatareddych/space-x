import React from 'react';
import Launch from '../Launch/Launch';
import './style.css';

export default class LaunchesList extends React.Component {
    render() {
        return (
             <div className="LaunchList">
                 
            <Launch 
              banner ="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
              title="FalconSat" 
              date = "2006-03-25T10:30:00+12:00"
              description="Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force."
              />

            <Launch 
              banner ="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
              title="FalconSat" 
              date = "2006-03-25T10:30:00+12:00"
              description="Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force."
              />

              <Launch 
              banner ="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
              title="FalconSat" 
              date = "2006-03-25T10:30:00+12:00"
              description="Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force."
              />

             </div>
        );
    }
}