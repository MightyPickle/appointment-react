import React, {
  useContext, useEffect, useState,
} from 'react';
import { toggleList, yearChoseHandler } from '../../../../utils/calendarEventHandlers';
import { getYearsList, yearSelected } from '../../../../utils/calendarHandlers';
import { CalendarContext } from '../../../context/CalendarContext';

export default function YearPicker({ open, setOpen }) {
  const { year } = useContext(CalendarContext);
  const [chosenYear, setChosenYear] = year;
  const [yearList, setYearList] = useState([]);

  useEffect(() => {
    setYearList(getYearsList(chosenYear));
  }, [chosenYear]);

  return (
    <div className="year-picker picker" data-field="year" onClick={(e) => toggleList(setOpen, e)}>
      <span className="year">
        {chosenYear}
      </span>
      {open
      && (
      <div className="year-picker list">
        {yearList && yearList.map((el, i) => (
          <span
            data-field="year"
            key={`m-${i}`}
            className={yearSelected(el, chosenYear) && 'selected'}
            onClick={(e) => yearChoseHandler(setChosenYear, el)}
          >
            {el}
          </span>
        ))}
      </div>
      )}

    </div>
  );
}
