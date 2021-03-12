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
     let launchListComponents =   this.state.launches.map((launch,index) => {
         let image = launch.links.flickr_images.length === 0 ? 
        'https://www.extremetech.com/wp-content/uploads/2020/06/spacex-crew-launch-nasa.jpg' :
         launch.links.flickr_images[0];


            return <Launch 
              key = {'launch_'+index}   // to avoid errors in the consoles each child should have specific key
              banner ={image}
              title={launch.mission_name}
              date = {launch.launch_date_local}
              description={launch.details}
            />
        })
        return launchListComponents;
    }

    render() {

        return (
                <div className="LaunchList">
                    {this.launchList()}
                </div>
        );
    }
}