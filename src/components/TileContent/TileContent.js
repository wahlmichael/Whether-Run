import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class TileContent extends Component {

  render() {
    return (
      <div>
         {this.props.run.distance} run today!
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(TileContent);