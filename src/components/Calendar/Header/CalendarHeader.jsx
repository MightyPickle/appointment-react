import React, { useContext, useEffect, useState } from 'react';
import { CalendarContext } from '../../context/CalendarContext';
import MonthPicker from './MonthPicker/MonthPicker';
import YearPicker from './YearPicker/YearPicker';

export default function CalendarHeader() {
  const [open, setOpen] = useState({ month: false, year: false });

  useEffect(() => {
    document.querySelector('.selected')?.scrollIntoView({ behavior: 'smooth' });
  }, [open]);

  return (
    <div className="calendar-header">
      <MonthPicker open={open.month} setOpen={setOpen} />
      <YearPicker open={open.year} setOpen={setOpen} />
    </div>
  );
}
