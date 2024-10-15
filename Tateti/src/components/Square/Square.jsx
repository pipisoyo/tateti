
function Square ({children,isSelected,updateBoard,index}) {
    const className=`square ${isSelected ? 'is-Selected' : '' }`
  
    const handleClick = ()=>{
      updateBoard (index)
    }
    return (
      <div onClick={handleClick} className={className}>{children}</div>
    )

    
  }

export default Square
