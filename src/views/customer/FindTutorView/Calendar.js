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

  handleDayClick(day, modifiers={}) {
    if(modifiers.disabled){
      return
    }
    const selected = modifiers.selected
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
    const now = new Date()
    const fromMonth = new Date() 
    const toMonth = new Date()
    toMonth.setMonth(now.getMonth() + 1)
    const toDay = new Date() 
    toDay.setDate(now.getDate() + 1)
    return (
      <div>
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
          disabledDays={[
            {
              before: now
            },
            {
              after: toMonth
            },
            {
              after: now,
              before: toDay
            },
            now
          ]}
          month={now}
          fromMonth={fromMonth}
          toMonth={toMonth}
        />
      </div>
    );
  }
}