import './App.css';
import { useState } from 'react';

 function Box({value, onBoxClick}){
  return (
        <button onClick={onBoxClick}>{value}</button>
  );
}
export default function Table() {
  const [xIsNext, setXIsNext] = useState(true);
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  function handleClick(i) {
    if(boxes[i]){return;}
    const next = boxes.slice();
    if(xIsNext){next[i] = "X";}
    else{next[i] = "S";}
    setBoxes(next);
    setXIsNext(!xIsNext);
  }
  const winning = win(boxes);
  let score;
  if (winning) {
    score = 'Winner: ' + winning;
  } else {
    score = 'player: ' + (xIsNext ? 'X' : 'S');
  }
  return (
    <>
    <div className="status">{score}</div>
      <div className="board-row">
        <Box value={boxes[0]} onBoxClick={() => handleClick(0)}/>
        <Box value={boxes[1]} onBoxClick={() => handleClick(1)}/>
        <Box value={boxes[2]} onBoxClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
      <Box value={boxes[3]} onBoxClick={() => handleClick(3)}/>
      <Box  value={boxes[4]} onBoxClick={() => handleClick(4)}/>
      <Box  value={boxes[5]} onBoxClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
      <Box  value={boxes[6]} onBoxClick={() => handleClick(6)}/>
      <Box  value={boxes[7]} onBoxClick={() => handleClick(7)}/>
      <Box  value={boxes[8]} onBoxClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

function win(boxes){
  const nums = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < nums.length; i++) {
    const [a, b, c] = nums[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return boxes[a];
    }
  }
  return null;
}

