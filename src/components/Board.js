import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardColumn from './BoardColumn';
import Square from './Square';
import { clickColumn } from '../actions';
import calculateWinner from '../utilities/calculateWinner';

export function Board(props) {
  
  // generates squares within given column
  function generateSquares(squares, colIndex) {
    return squares.map((squareVal, squareIndex) => {

      return (
        <Square squareOccupier={squareVal}
          index={squareIndex}
          key={squareIndex} />
      );
    });
  }

  function generateColumns() {
    return props.board.map((column, colIndex) => {

      const handleColumnClick = () => props.dispatch(clickColumn(colIndex));

      return (
        <BoardColumn handleColumnClick={handleColumnClick}
          key={colIndex}>
          {generateSquares(column, colIndex)}
        </BoardColumn>
      );
    });
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
