import Square from "../Square/Square";
import { TURNS } from "../../utils/constanst";


function Turn ({turn}){
    return(
<section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        )
}

export default Turn