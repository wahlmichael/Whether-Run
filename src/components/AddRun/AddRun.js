import React, { Component } from 'react';
import {connect} from 'react-redux';

import './AddRun.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class AddRun extends Component {
    state = {
        date: '',
        distance: '',
        runType: '',
        runToSend: {},
    }

    handleChange = (event, property) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
    }

    handleSubmit = () => {
        this.setState({
            ...this.state,
            runToSend: {
                day: this.state.date.substr(8, 2),
                month: this.state.date.substr(5, 2) - 1,
                year: this.state.date.substr(0, 4),
                distance: this.state.distance,
                runType: this.state.runType,
            }
        }, () => {
            this.props.dispatch({type: 'ADD_RUN_SAGA', payload: this.state.runToSend})
            setTimeout(() => this.props.history.push('/home'),75)
        })

    }
  render() {
    return (
      <div className="add-run-container">
         <h1 className="brand"> Add Run </h1>
         <div className="form-wrapper">
             <div className="info">
                <h3>Please enter the information of your run</h3>
                <ul className="run-info-list">
                    <li>Date</li>
                    <li>Distance in miles</li>
                    <li>Time in minutes</li>
                    <li>Shoes used</li>
                    <li>Leave a comment!</li>
                </ul>
             </div>
             <div className="run-input">
                <form>
                    <p>
                        <label>Date</label>
                        <input onChange={(event) => {this.handleChange(event, 'date')}} type="date"></input>
                    </p>
                    <p>
                        <label>Distance</label>
                        <input onChange={(event) => {this.handleChange(event, 'distance')}} type="text"></input>
                    </p>
                    <p>
                        <label>Run Type</label>
                        <select onChange={(event) => {this.handleChange(event, 'runType')}} className="full">
                            <option value="">Select</option>
                            <option>Long Run</option>
                            <option>Race Pace</option>
                            <option>Easy</option>
                            <option>Fartlek</option>
                            <option>Hills</option>
                            <option>Intervals</option>
                        </select>
                    </p>
                    
                    <p className="full">
                        <button onClick={this.handleSubmit}>Submit</button>
                    </p>
                </form>
             </div>
         </div>
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(AddRun);