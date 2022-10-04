import React from 'react';
import CalendarBody from './Body/CalendarBody';
import './Calendar.css';
import CalendarFooter from './Footer/CalendarFooter';
import CalendarHeader from './Header/CalendarHeader';

export default function Calendar({ setShowCalendar }) {
  return (
    <div className="calendar-container">
      <CalendarHeader />
      <CalendarBody />
      <CalendarFooter setShowCalendar={setShowCalendar} />
    </div>

  );
}
