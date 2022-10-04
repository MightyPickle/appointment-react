import { useState } from 'react';
import './App.css';
import { ContextProvider } from './components/context/CalendarContext';
import Time from './components/Time/Time';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ContextProvider>
      <div className={`App ${theme}`}>
        <Time />
      </div>
    </ContextProvider>
  );
}

export default App;
