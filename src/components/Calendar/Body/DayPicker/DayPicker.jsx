import React, { useContext, useEffect, useState } from 'react';
import {
  checkCurrent, checkSelected, daysInMonth, getStartDay,
} from '../../../../utils/calendarHandlers';
import { CalendarContext } from '../../../context/CalendarContext';

export default function Days() {
  const {
    currDate, year, month, day,
  } = useContext(CalendarContext);

  const [chosenYear] = year;
  const [chosenMonth] = month;
  const [chosenDay, setChosenDay] = day;
  const [days, setDays] = useState(daysInMonth(currDate.getFullYear(), currDate.getMonth()));

  useEffect(() => {
    setDays(daysInMonth(chosenYear, chosenMonth));
  }, [chosenYear, chosenMonth]);

  return (
    <div className="calendar-day">

      {Array.from({ length: getStartDay(chosenYear, chosenMonth) - 1 })?.map((_, i) => <span key={`empty-${i}`} />)}

      {Array.from({ length: days })?.map((el, i) => {
        const date = i + 1;
        return <span key={`day-${i}`} className={`${(checkCurrent(chosenYear, chosenMonth, date, currDate) && 'curr-date')} ${(checkSelected(chosenYear, chosenMonth, date, chosenDay) && 'selected')}`} onClick={() => setChosenDay(date)}>{date}</span>;
      })}

    </div>
  );
}
