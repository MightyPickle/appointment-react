import React, { useContext, useState } from 'react';
import { toggleCalendar } from '../../../../utils/calendarEventHandlers';
import { getThirdDay } from '../../../../utils/timeHandlers';
import Calendar from '../../../Calendar/Calendar';
import { CalendarContext } from '../../../context/CalendarContext';

export default function TimeDays() {
  const {
    currDate, day, month,
  } = useContext(CalendarContext);
  const [chosenDay, setChosenDay] = day;
  const [chosenMonth] = month;
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="timetable-date">
      <div className="btn today" onClick={() => setChosenDay(currDate.getDate())}>Сегодня</div>
      <div className="btn tomorrow" onClick={() => setChosenDay(currDate.getDate() + 1)}> Завтра</div>
      <div className="btn date" onClick={() => setChosenDay(currDate.getDate() + 2)}>{getThirdDay(currDate, chosenDay, chosenMonth)}</div>
      <div className="calendar" onClick={() => toggleCalendar(setShowCalendar)}>Все даты</div>
      {showCalendar
  && <Calendar setShowCalendar={setShowCalendar} />}

    </div>
  );
}
