export function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getStartDay(year, month) {
  return new Date(year, month).getDay();
}

export function checkCurrent(year, month, day, current) {
  if (current.toDateString() === new Date(year, month, day).toDateString()) return true;
  return '';
}

export function checkSelected(year, month, day, chosenDay) {
  if (new Date(year, month, chosenDay).toDateString()
   === new Date(year, month, day).toDateString()) {
    return true;
  }
  return '';
}

export function monthSelected(monthIndex, chosenMonth) {
  if (monthIndex === chosenMonth) return true;
  return '';
}

export function getYearsList(chosenYear) {
  return Array.from({ length: 20 }).fill().map((_, i) => chosenYear - 10 + i);
}
export function yearSelected(year, chosenYear) {
  if (year === chosenYear) return true;
  return '';
}
