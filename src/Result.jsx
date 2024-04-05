import { Link } from "react-router-dom";
import { useCalculator } from "./CalculatorProvider";


const Result =()=>{

    const{reset,listNum, selectNum,sum}=useCalculator();

    return(
        <>
        
        <h2>RESULT:{sum}</h2>

        <ul>
            {listNum.map((num,index)=>(
            
            
            <li key={index}>
                {num}
            </li>
        
        
        ))}

        </ul>
        <div> 
            <button type="button" onClick={reset}>RESET</button>
        </div>
       
        

        <Link to ="/">
            Volver a la Calculadora
            </Link>
        
        </>
       
      
    )


}

export default Result