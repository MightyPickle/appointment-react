import React, { useEffect } from 'react';
import { selectHandler } from '../../../utils/timeHandlers';
import TimeDays from './TimeDays/TimeDays';
import TimeIntervals from './TimeIntervals/TimeIntervals';

export default function TimeBody() {
  useEffect(() => {
    selectHandler(document.querySelector('.btn'));
  }, []);

  return (
    <div className="timetable-body" onClick={(e) => selectHandler(e.target)}>
      <TimeDays />
      <hr />
      <TimeIntervals />
    </div>
  );
}
