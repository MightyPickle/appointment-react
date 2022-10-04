import React, { useContext, useEffect, useState } from 'react';
import { generateIntervals } from '../../../../utils/timeHandlers';
import { CalendarContext } from '../../../context/CalendarContext';

export default function TimeIntervals() {
  const {
    day, month, year, time,
  } = useContext(CalendarContext);
  const [chosenDay] = day;
  const [chosenMonth] = month;
  const [chosenYear] = year;
  const [chosenTime, setChosenTime] = time;
  const [intervals, setIntervals] = useState(null);
  useEffect(() => {
    setIntervals(generateIntervals(chosenYear, chosenMonth, chosenDay));
  }, [chosenYear, chosenMonth, chosenDay]);

  return (
    <div className="timetable-intervals">
      {intervals && intervals.map((el, i) => (<div onClick={() => setChosenTime(el)} key={`i-${i}`} className="btn">{el}</div>))}
    </div>
  );
}
