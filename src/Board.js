import "./Board.css"
import {useState,useRef, useEffect} from 'react';
export const Board = ({reset,setReset,winner,setWinner}) => {

    const [data,setData] = useState(['','','','','','','','',''])
    const [turn,setTurn] = useState(1)
    const BoardRef = useRef(null);
    console.log("data")
    const draw = (event,index) => {
        if(data[index-1] === ''){
            const currentTurn = turn === 1 ? "X" : "O";
            data[index-1] = currentTurn;
            event.target.innerText = currentTurn;
            setTurn(turn === 1?2 : 1)

        }
    }
    useEffect(
        () => {
            setData(['','','','','','','','',''])
            const cells = BoardRef.current.children
            for (let i = 0; i < 9; i++) {
                cells[i].innerText = '';
            }
      
            setTurn(1);
      
            setWinner('');
            setReset(false);
        },
        [reset, setReset, setWinner]
    )
    useEffect(
        () => {
            const checkRow = ()=>{
                let ans = false
                for(let i = 0; i < 9; i += 3){
                    ans = ans || (data[i] === data[i+1] && data[i] === data[i+2] && data[i] !== '')
                }
                return ans
            }

            const checkCol = ()=>{
                let ans = false
                for(let i = 0; i < 3; i++){
                    ans = ans || (data[i] === data[i+3] && data[i] === data[i+6] && data[i] !== '')
                }
                return ans
            }

            const checkDiag = ()=>{
                    return ((data[0] === data[4] && 
                    data[0] === data[8] && data[0] !== '') || 
                    (data[2] === data[4] && data[2] === data[6] && 
                    data[2] !== ''));
            }

            const checkwin = checkRow() || checkCol() || checkDiag();

            const checkTie = () => {
                let count = 0;
                data.forEach((cell) => {
                    if (cell !== '') {
                        count++;
                    }
                })
                return count === 9;
            }

            if(checkwin){
                setWinner(turn === 1 ? "Player 2 wins" : "Player 1 wins")
            }
            else if (checkTie()) {
                setWinner("It's a Tie!");
            }
        }
    )
    return(
        <div className="board" ref = {BoardRef}>
            <div className="input input-1" 
            onClick={(e) => draw(e,1)}
                ></div>
            <div className="input input-2"
            onClick={(e) => draw(e,2)} 
                ></div>
            <div className="input input-3" 
            onClick={(e) => draw(e,3)}
                ></div>
            <div className="input input-4" 
            onClick={(e) => draw(e,4)}
                ></div>
            <div className="input input-5" 
            onClick={(e) => draw(e,5)}
                ></div>
            <div className="input input-6" 
            onClick={(e) => draw(e,6)}
                ></div>
            <div className="input input-7" 
            onClick={(e) => draw(e,7)}
                ></div>
            <div className="input input-8" 
            onClick={(e) => draw(e,8)}
                ></div>
            <div className="input input-9" 
            onClick={(e) => draw(e,9)}
                ></div>
        </div>
    );
}