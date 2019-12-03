import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddRunPopup from '../AddRunPopup/AddRunPopup.js'
import Confirm from '../Confirm/Confirm';
import './RunPopup.css';

const mapReduxStateToProps =(reduxState)=>{
    return reduxState;
  }

class RunPopup extends Component {
  state= {
    updateRunInfo: {},
    unit: 'miles',
    toggleModal: false,
  }

    componentDidMount = () => {
        const dateToSend = {
            day: this.props.date.getDate(),
            month: this.props.date.getMonth(),
            year: this.props.date.getFullYear(),
        };
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
      const month = this.props.date.getMonth();
      for (let i = 0; i < monthsInYear.length; i++) {
        return monthsInYear[month];
      }
    }

    handleCompleteClick = (id) => {
      this.props.dispatch({type: 'COMPLETE_RUN', payload: [this.state.updateRunInfo, id]});
      this.props.togglePopup();
    }

    handleChange = (event, property) => { // Updates completed run information
      if(property === 'distance'){ // Adds unit to distance
        this.setState({
          updateRunInfo: {
            ...this.state.updateRunInfo,
            distance: event.target.value + ' ' + this.state.unit,
          }
        })
      } else {
        this.setState({
          updateRunInfo: {
            ...this.state.updateRunInfo,
            [property]: event.target.value,
          }
        })
      }
    }

    handleUnitChange = (event) => {
      this.setState({
        ...this.state,
        unit: event.target.value,
      })
    }

    handleDeleteClick = (id) => {
      this.props.dispatch({type: 'DELETE_RUN', payload: id})
      this.handleClose();
      this.props.togglePopup();
    }
    
    // material ui modal
    handleClickOpen = () => {
      this.setState({ toggleModal: true });
    };
  
    handleClose = () => {
      this.setState({ toggleModal: false });
    };

  render() {
    return (
      <div className="popup">
          <div className="popup-inner">
            <div className="popup-inner-inner">
            { !this.props.runToday ?  <AddRunPopup togglePopup={this.props.togglePopup} dayOfWeek={this.dayOfWeek} monthOfYear={this.monthOfYear} date={this.props.date}/> :
            <>
            <h1>Run on {this.dayOfWeek()} {this.monthOfYear()} {this.props.singleRunReducer.day}</h1>
            <div className="complete-run">
              <h3>Fill in the information below to complete run</h3>
              <p>
                <label>Distance Ran:</label>
                <input onChange={(event) => {this.handleChange(event, 'distance')}} type="number"></input>
                <select className="mile-km-selector" onChange={(event) => this.handleUnitChange(event)}>
                  <option>miles</option>
                  <option>kilometers</option>
                </select>
              </p>
              <p>
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
            <Confirm 
            open={this.state.toggleModal}
            handleClose={this.handleClose}
            handleDeleteClick={() => this.handleDeleteClick(this.props.singleRunReducer.run_id)}
            />
             </>
            }
            
            <div className="popup-buttons">
              <button className ="popup-btn" onClick={this.props.togglePopup}>Close</button>
              {this.props.runToday ? 
              <>{!this.props.singleRunReducer.completed === true && <button className ="popup-btn" onClick={() => this.handleCompleteClick(this.props.singleRunReducer.run_id)}>Complete Run</button>}
              <button className ="popup-btn" onClick={this.handleClickOpen}>Delete Run</button></> : ""}
            </div>
            </div>
          </div>
        
          {/* <pre>{JSON.stringify(this.props.singleRunReducer.completed)}</pre> */}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(RunPopup);