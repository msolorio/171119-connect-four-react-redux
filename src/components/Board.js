import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Square from './Square';
import { clickSquare } from '../actions';

export function Board(props) {

  function handleSquareClick(index) {
    console.log('in handleSquareClick', index);
    props.dispatch(clickSquare(index));
  }

  function generateSquares() {
    return props.board.map((squareOccupier, index) => {
      const onSquareClick = () => handleSquareClick(index);

      return (
        <Square key={index}
          squareOccupier={squareOccupier}
          onSquareClick={onSquareClick} />
      );
    });
  }

  return (
    <div className="Board">
      {generateSquares()}
    </div>
  );
}

Board.propTypes = {
  blackIsNext: PropTypes.bool.isRequired,
  board: PropTypes.arrayOf(
    // PropTypes.arrayOf(PropTypes.string)
    PropTypes.string
  ).isRequired
};

const mapStateToProps = (state) => ({
  blackIsNext: state.blackIsNext,
  board: state.board
});

export default connect(mapStateToProps)(Board);
