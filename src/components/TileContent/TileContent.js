import React, { Component } from 'react';
import {connect} from 'react-redux';

import './TileContent.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}



class TileContent extends Component {
  render() {
    return (
      <>
      <div className="tile-weather-content">
        {this.props.weather && 
        <>
        <img className="weather-image" alt={this.props.weather.image} src={`https://www.weatherbit.io/static/img/icons/${this.props.weather.image}.png`}></img> 
        <div className="weather-data-in-tile">
        <div>high: {this.props.weather.high}</div>
        <div>low: {this.props.weather.low}</div>
        </div>
        </>
        }
      </div>
      {this.props.run === null ? null :  
        <div className="tileContent">
         <i className="green fas fa-running"></i>
         <div>
           <span className="inTile">{this.props.run.distance}</span>
           <br/>
           <span className="inTile">{this.props.run.run_type}</span>
         </div>

      </div>}
      </>

    );
  }
}

export default connect(mapReduxStateToProps)(TileContent);