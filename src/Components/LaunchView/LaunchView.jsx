import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import './style.css';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

 let zoomInProperties = {
      duration: 1000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,   
      scale: 1.4,
      arrows: true
 }

export class LaunchView extends React.Component {

    state = {
        launch : {
          links : {
          flickr_images : [] 
          }
        }
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
        let hasImages = this.state.launch.links.flickr_images.length > 0;
        return (
            <div className="launch-view">
                {this.launchAttribute('flight Number:' , 'flight_number')}
                {this.launchAttribute('Mission Name:' , 'mission_name')}
                {this.launchAttribute('Launch Date:' , 'launch_date_local')}

            {
              hasImages && (
                <Zoom {...zoomInProperties}>
              {
                   this.state.launch.links.flickr_images.map((each, index) =>

                  <img key={index} alt="Flicker Image" style={{ width: "100%" }} src={each} />)
              }
               </Zoom>
              )
            }

              <h1>Details : </h1><p>{this.state.launch.details}</p>
            </div>
        )
    }
}
export default withRouter(LaunchView);