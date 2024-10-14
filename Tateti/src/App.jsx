import { useState } from 'react'
import './App.css'

const TURNS = { X : "X", O : "O"}

const WINERS_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]



const Square = ({children,isSelected,updateBoard,index})=>{
  const className=`square ${isSelected ? 'is-Selected' : '' }`

  const handleClick = ()=>{
    updateBoard (index)
  }
  return (
    <div onClick={handleClick} className={className}>{children}</div>
  )
  
  
}

function App() {
  
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
  }
  return (
    <>
    <main className='board'>
      <h1>TaTeTi</h1>
      <section className='game'>
        {board.map((_,index)=>{
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
           
          )
        })
        }

      </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        {
      winner != null &&(
        <section className='winner'>
          <div className='text'>
            <h2>
              {
                winner === false 
                ? 'Empate' 
                : 'Gano : '
              }
            </h2>
            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>
          </div>
        </section>
       )}
        
        {<section>
          <button className='reload' onClick={reload}>Reiniciar</button>
          </section>}
     
    </main>
    </>
  )
}

export default App
