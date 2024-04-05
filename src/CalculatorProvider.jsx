import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({children}) => {
    const [selectNum, setSelectNum] = useState ('');
    const[listNum, setListNum] = useState ([]);
    const[sum, setSuma]= useState (0)

    const changeNum = (newNum) => {
        setSelectNum(parseInt(newNum));
    }

    const changeListNumbers = () => {
        if(Number(selectNum) || parseInt(selectNum) === 0){
            setSuma(sum + parseInt(selectNum));
            setListNum([...listNum, parseInt(selectNum)]);
        }
    }

    const reset = () => {
        setListNum([]);
        setSelectNum('');
        setSuma(0)
    }
    
    return (
        <CalculatorContext.Provider value={{selectNum, setSelectNum, changeNum, listNum, setListNum, changeListNumbers, sum, setSuma, reset }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculator = () => useContext(CalculatorContext)