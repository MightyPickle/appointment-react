import React from 'react';
import DayPicker from './DayPicker/DayPicker';
import Week from './Week/Week';

export default function CalendarBody() {
  return (
    <div className="calendar-body">
      <Week />
      <DayPicker />
    </div>
  );
}
