import React from 'react';
import { connect } from 'react-redux';

export function App() {

  return (
    <div className="App">
      from app component
    </div>
  );
}

const mapStateToProps = (state) => ({
  blackIsNext: state.blackIsNext,
  board: state.board
});

export default connect(mapStateToProps)(App);
