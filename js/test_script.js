const refs = {
  dayWeek: document.querySelector(".date-day"),
  dayMonth: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  time: document.querySelector(".digital-clock"),
  arrowSeconds: document.querySelector(".clock-seconds__arrow"),
  arrowMinutes: document.querySelector(".clock-minutes__arrow"),
  arrowHours: document.querySelector(".clock-hours__arrow"),
};
const namesOfDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

(() => {
  const intervalId = setInterval(updateInterface, 1000);
})();

function updateInterface() {
  const date = new Date();

  updateDate(date);
  updateClocks(date);
}

function addLeadingZero(number) {
  return String(number).padStart(2, "0");
}

function updateDate(date) {
  refs.dayWeek.textContent = namesOfDay[date.getDay()];
  refs.dayMonth.textContent = date.getDate();
  refs.month.textContent = namesOfMonth[date.getMonth()];
  refs.year.textContent = date.getFullYear();

  refs.time.textContent = `${addLeadingZero(date.getHours())} год.,
   ${addLeadingZero(date.getMinutes())} хв.,
   ${addLeadingZero(date.getSeconds())} сек.`;
}

function updateClocks(date) {
  refs.arrowSeconds.style.transform = `rotate(${
    (date.getSeconds() * 360) / 60
  }deg)`;
  refs.arrowMinutes.style.transform = `rotate(${
    (date.getMinutes() * 360) / 60
  }deg)`;
  refs.arrowHours.style.transform = `rotate(${
    (date.getHours() * 360) / (24 / 2) + date.getMinutes() * 0.33
  }deg)`;
}
