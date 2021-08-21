import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      Tic Tac Toe
    </div>
  );
}


class Square extends React.Component {
  render() {
    return (
    <button className="square">
      {this.props.value}
    </button> 
    );
  }
}

class Board extends React.Component {
  renderSqaure(i) {
    return <Square value={i} />;
  };

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSqaure(3)}
          {this.renderSqaure(4)}
          {this.renderSqaure(5)}
        </div>
        <div className="board-row">
          {this.renderSqaure(6)}
          {this.renderSqaure(7)}
          {this.renderSqaure(8)}
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{ /* TODO */}</ol>
        </div>
      </div>
    );
  }
}


export default App;
