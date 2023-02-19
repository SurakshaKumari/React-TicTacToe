import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }
 function Box({value, onBoxClick}){
  
  return (
        <button onClick={onBoxClick}>{value}</button>
  );
}
export default function Table() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  function handleClick(i) {
    const next = boxes.slice();
    next[0] = "X";
    setBoxes(next);
  }
  return (
    <>
      <div className="board-row">
        <Box value={boxes[0]}/>
        <Box value={boxes[1]}/>
        <Box value={boxes[2]}/>
      </div>
      <div className="board-row">
      <Box value={boxes[3]} />
      <Box  value={boxes[4]}/>
      <Box  value={boxes[5]}/>
      </div>
      <div className="board-row">
      <Box  value={boxes[6]}/>
      <Box  value={boxes[7]}/>
      <Box  value={boxes[8]}/>
      </div>
    </>
  );
}

