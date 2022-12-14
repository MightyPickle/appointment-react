import React from 'react';
import TimeBody from './Body/TimeBody';
import TimeFooter from './Footer/TimeFooter';
import TimeHeader from './Header/TimeHeader';
import './time.css';

export default function Time({ setModal }) {
  return (
    <div className="timetable-container">

      <TimeHeader />
      <TimeBody />
      <TimeFooter setModal={setModal} />
    </div>
  );
}
