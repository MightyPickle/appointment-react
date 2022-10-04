import data from '../data.json';

export function getThirdDay(currDate, day, month) {
  if (currDate.getMonth() === month
   && (currDate.getDate() === day || currDate.getDate() + 1 === day)) {
    if (String(month + 1).length < 2) {
      console.log(String(month));
      return `${currDate.getDate() + 2}.0${month + 1}`;
    }
    return `${currDate.getDate() + 2}.${month + 1}`;
  }

  if (String(month + 1).length < 2) {
    return `${day}.0${month + 1}`;
  }
  return `${day}.${month + 1}`;
}

export function selectHandler(target) {
  const buttons = target.parentNode.childNodes;
  if (target.classList.contains('btn')) {
    buttons.forEach((el) => el.classList.remove('btn-selected'));
    target.classList.add('btn-selected');
  }
}

export function generateIntervals(year, month, day) {
  const { busyIntervals } = data;
  const date = new Date(year, month, day);
  let startHour = 9;
  let endHour = 18;
  if (date.getDay() === 5) {
    startHour = 9;
    endHour = 17;
  }
  const dateArr = [];

  for (let i = startHour; i < endHour; i += 1) {
    dateArr.push(`${i}:00`);
    dateArr.push(`${i}:30`);
  }
  const dateKey = `${day}.${month + 1}.${year}`;
  let result = dateArr;
  if (Object.prototype.hasOwnProperty.call(busyIntervals, dateKey)) {
    result = dateArr.filter((el) => !busyIntervals[dateKey].includes(el));
  }
  return result;
}

export function toggleModal(setModal) {
  setModal((prev) => !prev);
}

export function submitBooking(year, month, day, time, setSelectedTime, setModal) {
  const [hours, minutes] = time.split(':');
  toggleModal(setModal);
  setSelectedTime((new Date(year, month, day, hours, minutes).toLocaleString('ru-Ru').slice(0, -3)));
}
