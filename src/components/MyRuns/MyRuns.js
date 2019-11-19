import React, { Component } from 'react';
import {connect} from 'react-redux';

class MyRuns extends Component {
  render() {
    return (
      <div>
          This is a list of my runs!
      </div>
    );
  }
}

export default connect()(MyRuns);