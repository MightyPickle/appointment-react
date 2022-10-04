import { selectHandler } from './timeHandlers';

export const toggleList = (setOpen, e) => {
  console.log(e.target.closest('.picker'));
  const element = e.target.closest('.picker');
  setOpen((prev) => ({ ...prev, [element.dataset.field]: !prev[element.dataset.field] }));
};

export const toggleCalendar = (setShowCalendar) => {
  setShowCalendar((prev) => !prev);
};

export const monthChoseHandler = (setChosenMonth, monthIndex) => {
  setChosenMonth(monthIndex);
};

export const yearChoseHandler = (setChosenYear, year) => {
  setChosenYear(year);
};

export const submitDate = (setShowCalendar) => {
  toggleCalendar(setShowCalendar);
  const element = document.querySelector('.date');
  // document.querySelector('.date').classList.add('btn-selected');
  selectHandler(element);
};
