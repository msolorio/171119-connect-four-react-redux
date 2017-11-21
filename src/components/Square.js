import React from 'react';

export default function Square(props) {
  function getClassName() {
    return props.squareOccupier && `Square-${props.squareOccupier}`;
  }

  return (
    <div className="SquareWrap"
      onClick={props.onSquareClick}>
      <div className={`Square ${getClassName()}`} />
    </div>
  );
}
