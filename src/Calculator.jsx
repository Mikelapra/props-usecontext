import { useCalculator } from "./CalculatorProvider";
import { Link } from "react-router-dom";

function Calculator() {
    const { selectNum, changeNum, changeListNumbers } = useCalculator();
    
    const handleNum = (num) => {
        changeNum(num);
        changeListNumbers();
    }

    return(
        <>
        <div className="app">
            <h1>Calculadora</h1>
            <p>{selectNum}</p>
            
            <table>
                <tbody>
                    <tr>
                    <td>
                            <button type="button" onClick={() => handleNum('0')}>0</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('1')}>1</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('2')}>2</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('3')}>3</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('4')}>4</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('5')}>5</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('6')}>6</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('7')}>7</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('8')}>8</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleNum('9')}>9</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <Link to='/result'>
                                <button type="button" onClick={changeListNumbers}>=</button>
                            </Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
            </div>
        </>

    )
}

export default Calculator;