import React from 'react';
import data from '../../../../data.json';

export default function Week() {
  const { weekDays } = data;
  return (
    <div className="calendar-weekday">
      {weekDays?.map((el) => <span key={el}>{el}</span>)}
    </div>
  );
}
