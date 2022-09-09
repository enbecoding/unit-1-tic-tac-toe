import { useState } from 'react';
import "./App.css";
import Square from "./components/Square";


function App() {
  // const propVariable = "this is a prop"
  const [gameSquares, setGameSquares] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState(true);
  
  const handleClick = () => {
    setGameSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  const calculateWinner = array => {
    const lines = [
      [0,1,2],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [3,4,5],
      [6,7,8],
      [2,4,6],
      [2,5,8]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameSquares[a] && gameSquares[a] === gameSquares[b] && gameSquares[a] === gameSquares[c]
      ) {
        return `${gameSquares[a]} won!`;
      }
    }
    return "Who will win?";
  }

  return (
    <div className="App">
      <span>{calculateWinner(gameSquares)}</span>
      <div className="container">
        {gameSquares.map((value, index) => {
          return (
          <Square 
            gameSquares={gameSquares}
            setGameSquares={setGameSquares}
            player={player}
            setPlayer={setPlayer}
            index={index}
            squareValue={value}
          />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
