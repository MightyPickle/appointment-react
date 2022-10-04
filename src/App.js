import { useState } from 'react';
import './App.css';
import { ContextProvider } from './components/context/CalendarContext';
import Modal from './components/Modal/Modal';
import Time from './components/Time/Time';

function App() {
  const [theme, setTheme] = useState('light');
  const [modal, setModal] = useState(false);
  return (
    <ContextProvider>
      <div className={`App ${theme}`}>
        {modal && <Modal setModal={setModal} />}

        <Time setModal={setModal} />
      </div>
    </ContextProvider>
  );
}

export default App;
