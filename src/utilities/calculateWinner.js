/**
 * findVerticalWin - finds vertical wins if any
 *
 * @param  {type} board - array or arrays
 * @return {string} - a winner if any
 */
function findVerticalWin(board) {

  // loop through all columns
  return board.reduce((winner, col) => {

    let currentWinner = '';

    // loop through first three squares
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

/**
 * findHorizontalWin - finds horizontal wins if any
 *
 * @param  {type} board - array or arrays
 * @return {string} - a winner if any
 */
function findHorizontalWin(board) {

  // loop through first four columns
  for (let i=0; i<4; i++) {

    // loop through all squares
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

  return '';
}

/**
 * findDownRightWin - finds any down right diagonal wins
 *
 * @param  {type} board - array or arrays
 * @return {string} - a winner if any
 */
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

/**
 * findDownLeftWin - finds down left diagonal wins if any
 *
 * @param  {array} board - array or arrays
 * @return {string} - a winner if any
 */
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

/**
 * calculateWinner
 *
 * @param  {array} board - array or arrays of square occupiers
 * @return {string} - a winner if any
 */
export default function calculateWinner(board) {

  return (
    findVerticalWin(board)
    || findHorizontalWin(board)
    || findDownRightWin(board)
    || findDownLeftWin(board)
  );
}
