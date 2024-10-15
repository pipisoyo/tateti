import Square from "../Square/Square";

function Winner({ winner }) {
  return (
    winner != null && (
      <section className='winner'>
        <div className='text'>
          <h2>
            {winner === false ? 'Empate' : 'Gano : '}
          </h2>
          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>
        </div>
      </section>
    )
  );
}

export default Winner;