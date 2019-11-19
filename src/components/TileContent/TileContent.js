import React, { Component } from 'react';
import {connect} from 'react-redux';

class TileContent extends Component {
  render() {
    return (
      <div>
          Something
      </div>
    );
  }
}

export default connect()(TileContent);