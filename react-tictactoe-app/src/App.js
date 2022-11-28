import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < lines.length; ++index) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (stepNumber > 8) {
    status = "Draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const handelClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext((prev) => !prev);

    setStepNumber(newHistory.length);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move # " + move : "Go to game start";
    return (
      <li key={move}>
        <button
          tabIndex="-1"
          className="move-button"
          onClick={() => {
            jumpTo(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const reset = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
  };

  return (
    <div>
      <div className="game">
        <p className="title">Tic Tac Toe</p>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => {
              handelClick(i);
            }}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          {(winner || stepNumber > 8) && (
            <button className="btn" onClick={reset}>
              retry?
            </button>
          )}
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

export default App;
