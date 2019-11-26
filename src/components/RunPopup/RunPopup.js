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
        console.log('poopyp oopy', this.props.runToday)
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

    handleSubmit = () => {
      console.log('submitting')
    }

    handleChange = (event, property) => {
      console.log(event.target.value, property)
    }
  render() {
    return (
      <div className="popup">
          <div className="popup-inner">
            { !this.props.runToday ?  <AddRunPopup /> :
            <>
            <h1>Run on {this.dayOfWeek()} {this.monthOfYear()} {this.props.singleRunReducer.day}</h1>
            <ul className="run-info-in-popup">
                <li><h3>Planned Distance: {this.props.singleRunReducer.distance}</h3></li>
                <li><h3>Run Type: {this.props.singleRunReducer.run_type}</h3></li>
            </ul>
            <div className="complete-run">
              <h3>Fill in the information below to complete run</h3>
              <p>
                <label>Distance Ran:</label>
                <input onChange={(event) => {this.handleChange(event, 'distance')}} type="text"></input>
                <label>Time:</label>
                <input onChange={(event) => {this.handleChange(event, 'time')}} type="text"></input>
              </p>
              <p>
                <label>Shoes Used:</label>
                <select onChange={(event) => {this.handleChange(event, 'shoes')}} className="full">
                    <option value="">Select</option>
                    <option>Nike Air Zoom Pegasus 36</option>
                </select>
              </p>
            </div>
             </>
            }
            <button onClick={this.handleSubmit}>Complete Run</button>
            <button onClick={this.props.togglePopup}>Close</button>
          </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(RunPopup);