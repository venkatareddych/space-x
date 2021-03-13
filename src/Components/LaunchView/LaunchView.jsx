import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import './style.css';


export class LaunchView extends React.Component {

    state = {
        launch : {}
    }

     componentDidMount = () => {
        let flightNo = this.props.match.params.flight_number
        this.getLaunch(flightNo)
    }

  getLaunch = (flightNo) => {
    axios.get('https://api.spacexdata.com/v3/launches/' + flightNo).then((response) => {
      this.setState(
        { launch: response.data }
      )
    }).catch((error) => {
      console.log(error)
    })
  }

launchAttribute = (title,key) => {
    const value = this.state.launch[key]
    return (
        <div className="viewstyles">
            <h1>{title}</h1> 
            <h1>{value}</h1>
        </div>
    )
}

    render() {
        console.log(this.state.launch);
        return (
            <div className="launch-view">
                {this.launchAttribute('flight Number:' , 'flight_number')}
                {this.launchAttribute('Mission Name:' , 'mission_name')}
                {this.launchAttribute('Launch Date:' , 'launch_date_local')}
                <h1> Details :</h1><p>{this.state.launch.details}</p>
            </div>
        )
    }
}
export default withRouter(LaunchView);