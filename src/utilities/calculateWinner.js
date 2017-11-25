// takes in a board returns if winner within subsection
function findVerticalWin(board) {

  // loop through columns and return winner if any
  return board.reduce((winner, col) => {

    let currentWinner = '';

    // check first three squares
    // to see if there is a vertical win of 4 in a row
    for (let i=0; i<3; i++) {
      if (
        col[i] !== ''
        && col[i] === col[i+1]
        && col[i] === col[i+2]
        && col[i] === col[i+3]
      ) {
        currentWinner = col[i];
      } else {
        currentWinner = winner;
      }
    }

    return currentWinner;
  }, '');
}

// loop through first 4 columns
function findHorizontalWin(board) {

  // for first four columns in board
  for (let i=0; i<4; i++) {
    // loop through all squares in column
    // to find horizontal win if any
    let currentWinner = board[i].reduce((winner, square, index) => {
      if (
        square !== ''
        && square === board[i+1][index]
        && square === board[i+2][index]
        && square === board[i+3][index]
      ) {
        return square;
      } else {
        return winner;
      }
    }, '');

    // if a winner is found exit function returning winner
    // otherwise continue outer for loop
    if (currentWinner) return currentWinner;
  }

  // if no winner found
  return '';
}

function findDownRightWin(board) {

  // within board loop through first 4 columns
  for (let i=0; i<4; i++) {
    // within each column loop through first 3 squares
    for (let j=0; j<3; j++) {
      if (
        board[i][j] !== ''
        && board[i][j] === board[i+1][j+1]
        && board[i][j] === board[i+2][j+2]
        && board[i][j] === board[i+3][j+3]
      ) {
        return board[i][j];
      }
    }
  }

  return '';
}

function findDownLeftWin(board) {

  // within board loop through last 4 columns
  for (let i=3; i<7; i++) {
    // within each column loop through first 3 squares
    for (let j=0; j<3; j++) {
      if (
        board[i][j] !== ''
        && board[i][j] === board[i-1][j+1]
        && board[i][j] === board[i-2][j+2]
        && board[i][j] === board[i-3][j+3]
      ) {
        return board[i][j];
      }
    }
  }

  return '';
}

// takes board (array of arrays), returns winner in any
export default function calculateWinner(board) {

  return (
    findVerticalWin(board)
    || findHorizontalWin(board)
    || findDownRightWin(board)
    || findDownLeftWin(board)
  );
}
