import React, { Component } from 'react';
import {connect} from 'react-redux';

import './MyShoes.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class MyShoes extends Component {
  render() {
    return (
      <div className="my-shoes-container">
        My Shoes go ehre
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(MyShoes);