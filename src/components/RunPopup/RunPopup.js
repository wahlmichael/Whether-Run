import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddRunPopup from '../AddRunPopup/AddRunPopup.js'

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
            { this.props.singleRunReducer.day ? 
            <>
            <h1>Run Scheduled for Today!</h1>
            <ul>
                <li>Date: {this.props.singleRunReducer.month}/{this.props.singleRunReducer.month}/{this.props.singleRunReducer.year}</li>
                <li>Distance: {this.props.singleRunReducer.distance}</li>
            </ul> </>: <AddRunPopup />
            }
            <button onClick={this.props.togglePopup}>Close</button>
            {<pre>{JSON.stringify(this.props.singleRunReducer)}</pre>}
          </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(RunPopup);