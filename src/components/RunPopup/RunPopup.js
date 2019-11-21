import React, { Component } from 'react';
import {connect} from 'react-redux';

import './RunPopup.css';

class RunPopup extends Component {
  render() {
    return (
      <div className="popup">
          <div className="popup-inner">
            This is the run popup
            <button onClick={this.props.togglePopup}>Close</button>
          </div>
      </div>
    );
  }
}

export default connect()(RunPopup);