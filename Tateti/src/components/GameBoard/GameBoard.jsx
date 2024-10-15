import { useState } from 'react';
import Square from '../Square/Square';
import Board from '../Board/Board';
import Turn from '../Turns/Turns';
import Winner from '../Winner/Winner';
import RestartButton from '../RestartButton/RestartButton';

import { TURNS } from '../../utils/constanst';
import { WINERS_COMBOS } from '../../utils/constanst';


function GameBoard() {
  
  const [board,setBoard] = useState(Array(9).fill(null))// Define el tablero en con 9 pociciones vacias

  const [turn, setTurn] = useState(TURNS.X)// define el primer turno en las X

  const [winner,setWinner] = useState(null)

  const checkWinner= (boardToCheck) => {
    for (const combo of WINERS_COMBOS){
      const [a,b,c] = combo;

      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] ===  boardToCheck[c] ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) =>{
    if (board[index]||winner) return
    const newBoard = [...board];
    newBoard[index]=turn
    setBoard(newBoard)
    const newTurn= turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }else if (newBoard.every(cell => cell !== null)){
      setWinner(false)
    }
    

  }
  const reload = ()=>{
    setBoard(Array(9).fill(null))
    setWinner(null)
  }
  return (
    <>
    <main className='board'>
      <h1>TaTeTi</h1>
      <Board board={board} updateBoard={updateBoard}/>
      <Turn turn={turn}/>
      <Winner winner={winner}/>
      <RestartButton reload={reload}/>
        
        
     
    </main>
    </>
  )
}

export default GameBoard