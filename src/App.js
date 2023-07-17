import { useState } from "react";

function Square({ value, clickSquare }) {
  return (
    <button className="square" onClick={clickSquare}>
      {value}
    </button>
  );
}

function Board({nextIsX, currentHistory, handlePlay}) {
  function handleClick(i) {
    if (currentHistory[i] || calculateWinner(currentHistory)) return;
    const currentSquares = currentHistory.slice();
    if (nextIsX) {
      currentSquares[i] = "X";
    } else {
      currentSquares[i] = "O";
    }
    handlePlay(currentSquares)
  }
  const winner = calculateWinner(currentHistory);
  let status = "";
  if (winner) {
    status = winner + "方获胜";
  } else {
    status = "由" + (nextIsX ? "X" : "O") + "方落子";
  }
  return (
    <>
      <h1>{status}</h1>
      <div className="board-row">
        <Square value={currentHistory[0]} clickSquare={() => handleClick(0)} />
        <Square value={currentHistory[1]} clickSquare={() => handleClick(1)} />
        <Square value={currentHistory[2]} clickSquare={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={currentHistory[3]} clickSquare={() => handleClick(3)} />
        <Square value={currentHistory[4]} clickSquare={() => handleClick(4)} />
        <Square value={currentHistory[5]} clickSquare={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={currentHistory[6]} clickSquare={() => handleClick(6)} />
        <Square value={currentHistory[7]} clickSquare={() => handleClick(7)} />
        <Square value={currentHistory[8]} clickSquare={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squareValues) {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < win.length; i++) {
    let [a, b, c] = win[i];
    if (
      squareValues[a] &&
      squareValues[a] === squareValues[b] &&
      squareValues[a] === squareValues[c]
    ) {
      return squareValues[a];
    }
  }
  return null;
}

function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [nextIsX, setNextIsX] = useState(true);
  const currentHistory = history[history.length - 1]
  function handlePlay(currentSquares) {
    setHistory([...history, currentSquares])
    setNextIsX(!nextIsX)
    console.log(currentSquares)
  }
  return (
  <>
    <div>
      <Board nextIsX={nextIsX} currentHistory={currentHistory} handlePlay={handlePlay} />
    </div>
  </>)
}
export default Game;
