import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class TileContent extends Component {

  componentDidMount = () => {
    console.log(this.props.run)
  }

  render() {
    return (
      <div>
         run on day {this.props.date}
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(TileContent);