import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardColumn from './BoardColumn';
import Square from './Square';
import { clickSquare } from '../actions';

export function Board(props) {

  function handleSquareClick(index) {
    console.log('in handleSquareClick', index);
    props.dispatch(clickSquare(index));
  }

  function generateSquares(squares) {
    console.log('squares:', squares);
    return squares.map((squareVal, index) => {
      return (
        <Square squareOccupier={squareVal}
          handleSquareClick={handleSquareClick} />
      );
    });
  }

  function generateColumns() {
    return props.board.map((column, index) => {
      // console.log('column', index);
      return (
        <BoardColumn key={index}>
          {generateSquares(column)}
        </BoardColumn>
      );
    });
    // console.log('props:', props);
  }

  return (
    <div className="Board">
      {generateColumns()}
    </div>
  );
}

Board.propTypes = {
  blackIsNext: PropTypes.bool.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired
};

const mapStateToProps = (state) => ({
  blackIsNext: state.blackIsNext,
  board: state.board
});

export default connect(mapStateToProps)(Board);
