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

    dayOfWeek = () => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const day = this.props.date.getDay();
      for (let i = 0; i < daysOfWeek.length; i++) {
        return daysOfWeek[day];
      }
    }

    monthOfYear = () => {
      const monthsInYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = this.props.singleRunReducer.month;
      for (let i = 0; i < monthsInYear.length; i++) {
        return monthsInYear[month];
      }
    }
  render() {
    return (
      <div className="popup">
          <div className="popup-inner">
            { this.props.singleRunReducer.day ? 
            <>
            <h1>Run on {this.dayOfWeek()} {this.monthOfYear()} {this.props.singleRunReducer.day}</h1>
            <ul className="run-info-in-popup">
                <li>{this.props.singleRunReducer.distance}</li>
                <li>{this.props.singleRunReducer.run_type}</li>
            </ul>
            <div className="complete-run">
              <h3>Complete Run</h3>
            </div>
             </>: <AddRunPopup />
            }
            <button onClick={this.props.togglePopup}>Close</button>
          </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(RunPopup);