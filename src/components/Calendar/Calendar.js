import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import TileContent from '../TileContent/TileContent.js'

const mapReduxStateToProps =(reduxState)=>{
  return reduxState;
}

class CalendarView extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_RUNS_FOR_CALENDAR'})
  }

  runDateCheck = (date) => {
    for (let i = 0; i < this.props.runsForCalendarReducer.length; i++) {
      if(date.getDate() === this.props.runsForCalendarReducer[i].day && date.getMonth() === this.props.runsForCalendarReducer[i].month && date.getFullYear() === this.props.runsForCalendarReducer[i].year){
        return [true, this.props.runsForCalendarReducer[i]]
      }
    }
    return false
  }

  render() {

    const tileContent = ({ date }) => {
      return this.runDateCheck(date)[0] ? <TileContent run={this.runDateCheck(date)[1]}/> : null
    }

    return (
      <div>
        {this.props.runsForCalendarReducer.length >= 1 && 
          <Calendar
          className='calendarClass'
          tileContent={tileContent}
          onChange={this.onChange}
          value={this.state.date}
          calendarType='US'
        />
      }
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(CalendarView);