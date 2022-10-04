import React, { useContext } from 'react';
import data from '../../../../data.json';
import { monthSelected } from '../../../../utils/calendarHandlers';
import { monthChoseHandler, toggleList } from '../../../../utils/calendarEventHandlers';
import { CalendarContext } from '../../../context/CalendarContext';
import '../header.css';

export default function MonthPicker({ open, setOpen }) {
  const { monthList } = data;

  const { month } = useContext(CalendarContext);
  const [chosenMonth, setChosenMonth] = month;

  return (
    <div className="month-picker picker" data-field="month" onClick={(e) => toggleList(setOpen, e)}>
      <span className="month">
        {monthList[chosenMonth]}
      </span>
      {open
      && (
      <div className="month-picker list">
        {monthList && monthList.map((el, i) => (
          <span
            data-field="month"
            key={`m-${i}`}
            className={monthSelected(i, chosenMonth) && 'selected'}
            onClick={(e) => monthChoseHandler(setChosenMonth, i)}
          >
            {el}
          </span>
        ))}
      </div>
      )}

    </div>
  );
}
