import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import TileContent from '../TileContent/TileContent.js';
import RunPopup from '../RunPopup/RunPopup.js';

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class CalendarView extends Component {
  state = {
    date: new Date(), 
  }

  // Displays calendar information
  onChange = date => this.setState({ date })

  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_RUNS_FOR_CALENDAR'})
    this.props.dispatch({type: 'FETCH_WEATHER'})
  }

  runDateCheck = (date) => {
    for (let i = 0; i < this.props.runsForCalendarReducer.length; i++) {
      if(date.getDate() === this.props.runsForCalendarReducer[i].day && date.getMonth() === this.props.runsForCalendarReducer[i].month && date.getFullYear() === this.props.runsForCalendarReducer[i].year){
        return [true, this.props.runsForCalendarReducer[i]]
      }
    }
    return false
  }

  // Handles popup for runs
  // constructor(props){  
  //   super(props);  
  //   this.state = { showPopup: false };  
  //   }  
    
    togglePopup(date) {  
      this.setState({  
            ...this.state,
          showPopup: !this.state.showPopup,
          clickedDate: date,
      }, () => {
        console.log('in date', this.state.clickedDate) 
      });
 
     }  

     onClickDay = (value) => {
       this.togglePopup(value)
      }

  render() {

    const tileContent = ({ date }) => {
      return this.runDateCheck(date)[0] ? <TileContent run={this.runDateCheck(date)[1]}/> : null
    }

    return (
      <div>
        {
          <Calendar
          className='calendarClass'
          tileContent={tileContent}
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.onClickDay}
          calendarType='US'
        />
      }
      {/* {<button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>} */}
      {this.state.showPopup ?  <RunPopup  date={this.state.clickedDate} togglePopup={this.togglePopup.bind(this)}/> : null  }
      {/* <pre>{JSON.stringify(this.state.date)}</pre> */}
      <pre>{JSON.stringify(this.props.weatherReducer)}</pre>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(CalendarView);