import { useState } from "react";
import Board from "./Board";

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    let nextIsX = currentMove % 2 === 0
    const currentHistory = history[currentMove]
  
    function handlePlay(currentSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), currentSquares]
      setHistory(nextHistory)
      setCurrentMove(nextHistory.length - 1)
    }
  
    function jumpTo(index){
      setCurrentMove(index)
    }
  
    const moves = history.map((currentValue, index) => {
      let text = ""
      if(index > 0){
        text = "返回到第" + index + "步"
      }else{
        text = "回到游戏刚开始的状态"
      }
      return (<li key={index}>
        <button onClick={() => jumpTo(index)}>{text}</button>
      </li>)
    })
  
    return (
    <>
      <div>
        <Board nextIsX={nextIsX} currentHistory={currentHistory} handlePlay={handlePlay} />
      </div>
      <div className="game-info">
        <ul>
          {moves}
        </ul>
      </div>
    </>)
  }
 