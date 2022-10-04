import React, { useContext } from 'react';
import { submitBooking } from '../../../utils/timeHandlers';
import { CalendarContext } from '../../context/CalendarContext';

export default function TimeFooter() {
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
      {selectedTime && <div>{selectedTime.toLocaleString('ru-Ru')}</div>}
      <button type="button" onClick={() => setSelectedTime(submitBooking(chosenYear, chosenMonth, chosenDay, chosenTime))}>Записаться на консультацию</button>
    </div>
  );
}
