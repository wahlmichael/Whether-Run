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
        runToSend: {},
        tilesDate: {},
    }

    componentDidMount = () => {
        console.log(this.state)
        console.log(this.props.date.getDate())
        this.setState({
            ...this.state,
            tilesDate:{
                day: this.props.dayOfWeek(this.props.date.getDate()),
                month: this.props.monthOfYear(this.props.date.getMonth()),
                year: this.props.date.getFullYear(),
        }
        });
        console.log(this.state.tilesDate)
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
                day: this.props.date.getDate(),
                month: this.props.date.getMonth(),
                year: this.state.tilesDate.year,
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
                    <p>
                        <label>Distance</label>
                        <input onChange={(event) => {this.handleChange(event, 'distance')}} type="text"></input>
                    </p>
                    <p className="full">
                        <label>Comment</label>
                        <textarea></textarea>
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