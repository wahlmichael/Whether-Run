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
    days: [12,14,18]
  }

  onChange = date => this.setState({ date })

  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_RUNS_FOR_CALENDAR'})
  }

  runDateCheck = (date) => {
    for (let i = 0; i < this.state.days.length; i++) {
      console.log(this.state.days[i])
      console.log(date.getDate())
      if(date.getDate() === this.state.days[i]){
        return [true,this.state.days[i]]
      }
    }
    return false
  }

  render() {

    const tileContent = ({ date }) => {
      console.log(date)
      return this.runDateCheck(date)[0] ? <TileContent date={this.runDateCheck(date)[1]}/> : null
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
        <pre>{JSON.stringify(this.state.date.getDate())}</pre>
        <pre>{JSON.stringify(this.state.date.getMonth())}</pre>
        <pre>{JSON.stringify(this.state.date.getYear())}</pre> 
        <pre>{JSON.stringify(this.props.runsForCalendarReducer)}</pre>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(CalendarView);