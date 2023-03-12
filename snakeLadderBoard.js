//const numRange = Array.from({length: 100}, (_,i) => 100 - i);
const boardContainer = document.getElementById('board')
let count = 100;
for (let row = 0; row < 10; row++) {
  let rowEl = document.createElement('div');
  rowEl.classList.add('row');
  if (row % 2) {
    rowEl.classList.add('odd');
  } else {
    rowEl.classList.add('even');
  }
  for (let col = 0; col < 10; col++) {
    let colEl = document.createElement('div');
    colEl.classList.add('col');
    colEl.classList.add(count % 7 + "");
    colEl.innerText = count;
    count--;
    rowEl.appendChild(colEl);
  }
  boardContainer.appendChild(rowEl);
}
