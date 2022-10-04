import React, { useContext } from 'react';
import { submitBooking } from '../../../utils/timeHandlers';
import { CalendarContext } from '../../context/CalendarContext';

export default function TimeFooter({ setModal }) {
  const {
    year, day, month, time, selected,
  } = useContext(CalendarContext);
  const [chosenDay] = day;
  const [chosenMonth] = month;
  const [chosenTime] = time;
  const [chosenYear] = year;
  const [selectedTime, setSelectedTime] = selected;

  return (
    <div className="timetable-footer">
      <button type="button" onClick={() => submitBooking(chosenYear, chosenMonth, chosenDay, chosenTime, setSelectedTime, setModal)}>Записаться на консультацию</button>
    </div>
  );
}
