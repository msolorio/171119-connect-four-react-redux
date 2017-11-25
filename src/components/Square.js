import React from 'react';
import PropTypes from 'prop-types';

export default function Square(props) {
  function getClassName() {
    return props.squareOccupier && `Square-${props.squareOccupier}`;
  }

  return (
    <div className="SquareWrap">
      <div className={`Square ${getClassName()}`} />
    </div>
  );
}

Square.propTypes = {
  squareOccupier: PropTypes.string.isRequired
};
