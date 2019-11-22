import React, { Component } from 'react';
import {connect} from 'react-redux';

import './TileContent.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class TileContent extends Component {

  render() {
    return (
      <div className="tileContent">
         <i className="green fas fa-running"></i>
         <div>
           <span className="inTile">{this.props.run.distance}</span>
           <br/>
           <span className="inTile">{this.props.run.time}</span>
         </div>

      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(TileContent);