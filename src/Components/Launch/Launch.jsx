import React from 'react';
import './style.css'

export default class Launch extends React.Component {
    render() {
        return(
            <div className="Launch">
                <img alt="" src={this.props.banner} />
                <div className="content">
                    <div className="info">
                        <h2>{this.props.title}</h2>
                        <h2>{this.props.date}</h2> 
                    </div>
                    <p>{this.props.description}</p>  
                </div> 
            </div>

        )
    }
}