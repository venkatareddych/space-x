import React from 'react';
import Launch from '../Launch/Launch';
import './style.css';
import axios from 'axios';

export default class LaunchesList extends React.Component {

    state = {
        launches : []
    }

    componentDidMount = () => {
        this.getLaunches()
    }

    getLaunches = () => {
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response) => {
           this.setState({
               launches : response.data
           })
        }).catch((error) => {
            console.log(error);
        })

    }

    launchList = () => {
     let launchListComponents =   this.state.launches.map(launch => {
         let image = launch.links.flickr_images.length === 0 ? 
        'https://www.nasa.gov/sites/default/files/images/367208main_road2apollo-22b_full.jpg' :
         launch.links.flickr_images[0];
            return <Launch 
              banner ={image}
              title={launch.mission_name}
              date = {launch.launch_date_local}
              description={launch.details}
            />
        })
        return launchListComponents;
    }

    render() {
        console.log(this.state.launches.[0])

        return (
                <div className="LaunchList">
                    {this.launchList()}
                </div>
        );
    }
}