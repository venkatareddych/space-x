import React from 'react';
import './style.css'

export default class Launch extends React.Component {
    render() {
        return(
            <div className="launch-card">
                <img src="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" />
                <div className="content">
                    <div className="info">
                        <h2>FalconSat</h2>
                        <h2>2006-03-25T10:30:00+12:00</h2> 
                    </div>
                <p>Description : Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force.</p> 
                </div> 
            </div>
        )
    }
}