const BOARD_SIZE = 3;
const X_CLASS = 'x';
const O_CLASS = 'o';

const board = Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => ''));
let turn = X_CLASS;
let gameEnded = false;

const turnEle = document.querySelector('.turn');

const boardContainer = document.querySelector('#board');

for (let row = 0; row < BOARD_SIZE; row++) {
  let rowContainer = document.createElement('div')
  rowContainer.classList.add('row');
  for (let col = 0; col < BOARD_SIZE; col++) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.dataset.rowIndex = row;
    cell.dataset.colIndex = col;
    rowContainer.appendChild(cell);
  }
  boardContainer.appendChild(rowContainer);
}

boardContainer.addEventListener('click', event => {
  const cell = event.target;
  if (cell.classList.contains('cell') && !cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS) && !gameEnded) {
    const rowIndex = parseInt(cell.dataset.rowIndex);
    const colIndex = parseInt(cell.dataset.colIndex);
    board[rowIndex][colIndex] = turn;
    cell.classList.add(turn);
    cell.textContent = turn;

    // Check for winning move
    if (checkWin(turn)) {
      gameEnded = true;
      turnEle.classList.add('green');
      turnEle.innerHTML = `${turn} wins!`;
      boardContainer.removeEventListener('click', handleClick);
    } else if (checkTie()) {
      gameEnded = true;
      turnEle.classList.add('orange');
      turnEle.innerHTML = 'Tie game!';
      boardContainer.removeEventListener('click', handleClick);
    } else {
      turn = turn === X_CLASS ? O_CLASS : X_CLASS;
      turnEle.innerHTML = `${turn}'s turn.`
    }
  }
});

function checkWin(player) {
  // Check rows
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (board[i].every(cell => cell === player)) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < BOARD_SIZE; j++) {
    if (board.every(row => row[j] === player)) {
      return true;
    }
  }

  // Check diagonals
  if (board.every((row, i) => row[i] === player) || board.every((row, i) => row[BOARD_SIZE - i - 1] === player)) {
    return true;
  }

  return false;
}

function checkTie() {
  return board.every(row => row.every(cell => cell === X_CLASS || cell === O_CLASS));
}


      // var board = [
      //   ['', '', ''],
      //   ['', '', ''],
      //   ['', '', '']
      // ];
      // var turn = 'x';
      // var cells = document.querySelectorAll('.cell');
      // for (var i = 0; i < cells.length; i++) {
      //   cells[i].addEventListener('click', function() {
      //     var cellId = this.id;
      //     var row = cellId[5];
      //     var col = cellId[7];
      //     if (board[row][col] === '') {
      //       board[row][col] = turn;
      //       this.classList.add(turn);
      //       this.innerHTML = turn;
      //       if (turn === 'x') {
      //         turn = 'o';
      //       } else {
      //         turn = 'x';
      //       }
      //     }
      //   });
      // }
