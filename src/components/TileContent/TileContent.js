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
        <img className="weather-image" src="https://www.weatherbit.io/static/img/icons/t01d.png"></img>
        <pre>{JSON.stringify(this.props.weather)}</pre>
      </div>
      {this.props.run === null ? null :  
        <div className="tileContent">
         <i className="green fas fa-running"></i>
         <div>
           <span className="inTile">{this.props.run.distance}</span>
           <br/>
           <span className="inTile">{this.props.run.time}</span>
           <span>{this.props.run.day}</span>
         </div>

      </div>}
      </>

    );
  }
}

export default connect(mapReduxStateToProps)(TileContent);