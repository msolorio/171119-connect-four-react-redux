import * as actions from '../actions';
import calculateWinner from '../utilities/calculateWinner';

const initialState = {
  blackIsNext: true,
  board: Array(7).fill(Array(6).fill(''))
};

export default function gameReducer(state=initialState, action) {

  if (calculateWinner(state.board)) return state;

  switch(action.type) {
    case actions.CLICK_COLUMN:

      // if no available squares in column return state
      if (state.board[action.colIndex][0] !== '') return state;

      const boardClone = state.board.map((column, index) => {
        if (index === action.colIndex) {
          const colClone = column.slice(0);
          const lastIndex = colClone.lastIndexOf('');
          colClone[lastIndex] = state.blackIsNext ? 'black' : 'red';

          return colClone;
        } else {
          return column;
        }
      });

      return Object.assign({}, state, {
        board: boardClone,
        blackIsNext: !state.blackIsNext
      });

    default:
      return state;
  }

};
