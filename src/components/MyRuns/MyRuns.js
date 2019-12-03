import React, { Component } from 'react';
import {connect} from 'react-redux';

import './MyRuns.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class MyRuns extends Component {
  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_RUNS_FOR_CALENDAR'})
  }

  handleDeleteClick = (id) => {
    this.props.dispatch({type: 'DELETE_RUN', payload: id})
  }

  findTimePerDistance = (time, distance) => {
    if(time === null){
      return ''
    } else {
      const hours = time.substr(0,2);
      const minutes = time.substr(3,2);
      const seconds = time.substr(5,2);
      return minutes;
    }
  }

  render() {
    return (
      <div className="add-run-container">
        <div className="myRuns">
            <h1>My Runs</h1>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Distance</th>
                  <th>Time</th>
                  <th>Time per Distance</th>
                  <th>Completed?</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.runsForCalendarReducer.map(run => {
                  var completed = "";
                  if(run.completed == true){
                    completed = 'complete'
                  } else {completed = 'incomplete'}
                  return <tr 
                        key={run.run_id}><td>{run.month + 1}/{run.day}</td><td>{run.distance}</td><td>{run.time}</td>
                        <td>{this.findTimePerDistance(run.time, run.distance)}</td>
                        <td><span onClick={() => this.handleCompleteClick(run.run_id)} className="completeRun">{completed}</span></td>
                        <td><span onClick={() => this.handleDeleteClick(run.run_id)} className="deleteRun">delete</span></td>
                        </tr>
                })}
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(MyRuns);