import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';

class CalendarView extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    const tileContent = ({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>run today</p> : null;
    const tileClassName = ({ activeStartDate, date, view }) => 'calendarTile';
    return (
      <div>
        <Calendar
          className='calendarClass'
          tileContent={tileContent}
          onChange={this.onChange}
          value={this.state.date}
          tileClassName={tileClassName}
          calendarType='US'
        />
      </div>
    );
  }
}

export default connect()(CalendarView);