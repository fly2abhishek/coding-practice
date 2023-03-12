const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
document.getElementById('year').value = year;
document.getElementById('month').value = month;
displayCalendar()

function displayCalendar() {
  const monthSelect = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const calendarList = document.getElementById('calendar');

  const month = parseInt(monthSelect.value);
  const year = parseInt(yearInput.value);

  const monthText =  new Date(year, month, 1).toLocaleDateString("default", {month: 'long'});

  // Get the number of days in the selected month.
  const numDays = new Date(year, month + 1, 0).getDate();

  // Calculate the day of the week of the first day of the selected month.
  const firstDay = new Date(year, month, 1).getDay();

  // Create an array to hold the days of the month.
  const days = Array.from({
    length: numDays
  }, (_, i) => i + 1);

  let count = 0;

  document.getElementById('title').innerText = `${monthText} ${year}`
  // Create the calendar cells.
  calendarList.innerHTML = '';
  for (let i = 0; i < firstDay; i++) {
    const li = document.createElement('li');
    calendarList.appendChild(li);
    count++;
  }
  for (let i = 0; i < days.length; i++) {
    const li = document.createElement('li');
    li.textContent = days[i];
    calendarList.appendChild(li);
    count++;
  }
  if (count % 7) {
    for (let i = count % 7; i < 7; i++) {
      const li = document.createElement('li');
      calendarList.appendChild(li);
      count++;
    }
  }
}
