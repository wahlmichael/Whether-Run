import React, { Component } from 'react';
import {connect} from 'react-redux';

import './AddRun.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class AddRun extends Component {
  render() {
    return (
      <div className="add-run-container">
         <h1 className="brand"> Add Run </h1>
         <div className="form-wrapper">
             <div className="info">
                <h3>Please enter the information of your run</h3>
                <ul className="run-info-list">
                    <li>Date</li>
                    <li>Distance</li>
                    <li>Time</li>
                </ul>
             </div>
             <div className="run-input">
                <form>
                    <p>
                        <label>Date</label>
                        <input type="date"></input>
                    </p>
                    <p>
                        <label>Distance</label>
                        <input type="text"></input>
                    </p>
                    <p>
                        <label>Time</label>
                        <input type="text"></input>
                    </p>
                    <p>
                        <label>Shoes</label>
                        <input type="text"></input>
                    </p>
                    <p className="full">
                        <label>Comment</label>
                        <textarea></textarea>
                    </p>
                    <p className="full">
                        <button>Submit</button>
                    </p>
                </form>
             </div>
         </div>
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(AddRun);