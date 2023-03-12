const calandar = document.querySelector('.calendar');
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const daysInMonth = new Date(year, month+1, 0).getDate();

const week = ["S", "M", "T", "W", "T", "F", "S",]

const calArray = Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => ''));

calArray[0] = week;
let w = 1;
let d = 1
let x = day;
while (d <= daysInMonth) {
  while (calArray[x]) {
    calArray[x] = d;
    x++;
    d++;
  }
  x = 0;
}

console.log(calArray);
