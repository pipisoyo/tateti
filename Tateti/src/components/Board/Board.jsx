import Square from "../Square/Square.jsx"

function Board ({board,updateBoard}){
  return(
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
  )
}

export default Board