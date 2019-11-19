import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import TileContent from '../TileContent/TileContent.js'

class CalendarView extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_RUNS_FOR_CALENDAR'});
  }

  render() {
    const tileContent = ({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>run today</p> : null;
    const tileClassName = ({ activeStartDate, date, view }) => 'calendarTile';
    return (
      <div>
        <Calendar
          className='calendarClass'
          tileContent={<TileContent />}
          onChange={this.onChange}
          value={this.state.date}
          tileClassName={tileClassName}
          calendarType='US'
        />
        <pre>{JSON.stringify(this.state.date.getDate())}</pre>
        <pre>{JSON.stringify(this.state.date.getMonth())}</pre>
      </div>
    );
  }
}

export default connect()(CalendarView);