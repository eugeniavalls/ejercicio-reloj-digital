// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const digitalClockElement = document.getElementById('digital-clock');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const dayElement = document.getElementById('day');
const numberDayElement = document.getElementById('number-day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const clockElement = document.getElementById('clock');
const handlesElement = document.getElementById('handles');
const lineSeconds = document.getElementById('line-seconds');
const lineMinutes = document.getElementById('line-minutes');
const lineHours = document.getElementById('line-hours');
const rootStyles = document.documentElement.style;

let daysWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds() * 6;
  hourElement.textContent = date.getHours();
  minuteElement.textContent = date.getMinutes();
  dayElement.textContent = daysWeek[date.getDay()];
  numberDayElement.textContent = date.getDate();
  monthElement.textContent = month[date.getMonth()];
  yearElement.textContent = date.getFullYear();
  rootStyles.setProperty('--second-rotation', seconds + 'deg');
}, 1000);
