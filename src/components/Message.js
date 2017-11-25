import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import calculateWinner from '../utilities/calculateWinner';

export function Message(props) {

  function generateMessage() {

    const winner = calculateWinner(props.board);

    switch(true) {
      case !!winner:
        // capital case winner
        return `Winner: ${winner.charAt(0).toUpperCase() + winner.slice(1)}`;
      // case !calculateSquaresAvailable:
      //   return 'Game over. There are no squares available';
      default:
        return `Player's turn: ${props.blackIsNext ? 'Black' : 'Red'}`;
    }
  }

  return (
    <div className="Message">
      {generateMessage()}
    </div>
  );
}

Message.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired,
  blackIsNext: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  board: state.board,
  blackIsNext: state.blackIsNext
});

export default connect(mapStateToProps)(Message);
