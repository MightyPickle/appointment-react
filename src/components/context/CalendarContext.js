import { createContext, useMemo, useState } from 'react';

const CalendarContext = createContext(null);

function ContextProvider({ children }) {
  const today = useMemo(() => new Date());
  const [currDate, setCurrDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState(null);
  const [chosenMonth, setChosenMonth] = useState(currDate.getMonth());
  const [chosenYear, setChosenYear] = useState(currDate.getFullYear());
  const [chosenDay, setChosenDay] = useState(currDate.getDate());
  const [chosenTime, setChosenTime] = useState('');

  return (
    <CalendarContext.Provider value={{
      currDate,
      month: [chosenMonth, setChosenMonth],
      year: [chosenYear, setChosenYear],
      day: [chosenDay, setChosenDay],
      time: [chosenTime, setChosenTime],
      selected: [selectedTime, setSelectedTime],
    }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export { ContextProvider, CalendarContext };
