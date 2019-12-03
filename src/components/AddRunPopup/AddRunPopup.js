import React, { Component } from 'react';
import {connect} from 'react-redux';

import './AddRunPopup.css';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class AddRunPopup extends Component {
    state = {
        date: '',
        distance: '',
        runType: '',
        runToSend: {},
        tilesDate: {},
    }

    componentDidMount = () => {
        this.setState({
            ...this.state,
            tilesDate:{
                day: this.props.dayOfWeek(this.props.date.getDate()),
                month: this.props.monthOfYear(this.props.date.getMonth()),
                year: this.props.date.getFullYear(),
        }
        });
      }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
    }

    handleSubmit = () => {
        this.setState({
            ...this.state,
            runToSend: {
                day: this.props.date.getDate(),
                month: this.props.date.getMonth(),
                year: this.state.tilesDate.year,
                runType: this.state.runType,
                distance: this.state.distance,
            }
        }, () => {
            this.props.dispatch({type: 'ADD_RUN_SAGA', payload: this.state.runToSend})
            this.props.togglePopup();
        });


    }
  render() {
    return (
      <div className="add-run-container">
         <div className="form-wrapper">
             <div className="info">
                <h2>Add run for {this.state.tilesDate.day}, {this.state.tilesDate.month} {this.props.date.getDate()}</h2>
             </div>
             <div className="run-input">
                <form>
                    <p className="full">
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
                        <button type="button" onClick={this.handleSubmit}>Submit</button>
                    </p>
                </form>
             </div>
         </div>
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(AddRunPopup);