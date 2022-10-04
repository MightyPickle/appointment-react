import React from 'react';
import { submitDate } from '../../../utils/calendarEventHandlers';

export default function CalendarFooter({ setShowCalendar }) {
  return (
    <div className="calendar-footer">
      <button type="button" onClick={() => submitDate(setShowCalendar)}>Выбрать</button>
    </div>
  );
}

// onClick={() => toggleCalendar(setShowCalendar)}
