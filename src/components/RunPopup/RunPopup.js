import React, { Component } from 'react';
import {connect} from 'react-redux';

import './RunPopup.css';

const mapReduxStateToProps =(reduxState)=>{
    return reduxState;
  }

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
            <button onClick={this.props.togglePopup}>Close</button>
            <pre>{JSON.stringify(this.props.singleRunReducer)}</pre>
          </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(RunPopup);