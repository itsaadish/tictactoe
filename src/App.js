import logo from './logo.svg';
import './App.css';
import { Board } from './Board';
import {useState} from 'react';
function App() {
  const [reset,setReset] = useState(false);
  const [winner,setWinner] = useState('');
  const resetBoard = () => {
    setReset(true);
  }
  return (
    <div className="App">
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
      <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner}>
      </Board>
    </div>
  );
}

export default App;
