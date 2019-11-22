import React, { Component } from 'react';
import {connect} from 'react-redux';

import './RunPopup.css';

class RunPopup extends Component {
    componentDidMount = () => {
        const dateToSend = {
            day: this.props.date.getDate(),
            month: this.props.date.getMonth(),
            year: this.props.date.getFullYear(),
        }
        this.props.dispatch({type: 'FETCH_SPECIFIC_RUN', payload: dateToSend})
    }
  render() {
    return (
      <div className="popup">
          <div className="popup-inner">
            This is the run popup
            <pre>{JSON.stringify(this.props.date.getDate())}</pre>
            <button onClick={this.props.togglePopup}>Close</button>
          </div>
      </div>
    );
  }
}

export default connect()(RunPopup);