import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class TileContent extends Component {

  render() {
    return (
      <div>
         <span className="blue">{this.props.run.distance}</span>
         <br/>
         <span className="green">{this.props.run.time}</span>
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(TileContent);