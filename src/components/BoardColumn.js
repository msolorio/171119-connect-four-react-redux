import React from 'react';

export default function BoardColumn(props) {
  return (
    <div className="BoardColumn"
      onClick={props.handleColumnClick}>
      {props.children}
    </div>
  );
}
