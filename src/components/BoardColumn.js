import React from 'react';
import PropTypes from 'prop-types';

export default function BoardColumn(props) {
  return (
    <div className="BoardColumn">
      {props.children}
    </div>
  );
}
