import React, { useContext } from 'react';
import { toggleModal } from '../../utils/timeHandlers';
import { CalendarContext } from '../context/CalendarContext';
import './modal.css';

export default function Modal({ setModal }) {
  const { selected } = useContext(CalendarContext);
  const [selectedTime] = selected;
  return (
    <div className="modal" onClick={() => toggleModal(setModal)}>
      <div className="modal-body">
        <p>
          Вы успешно записаны на прием:
          <br />
          {selectedTime}
        </p>
      </div>
    </div>
  );
}
