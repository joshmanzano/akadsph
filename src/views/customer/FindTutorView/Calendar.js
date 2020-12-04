import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import Moment from 'moment';
import 'src/CalendarPicker.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays }, () => {
      this.props.getDays(selectedDays);
    });

    console.log(day.toLocaleDateString('en-GB'));
    console.log(Moment(day).format('YYYY-DD-MM'));
  }

  render() {
    return (
      <div>
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}