import { useState } from "react"
function useInput(validationFunc,errorMSG){
    const [inputValue,setInputValue] = useState(``)    
    const [isTouched,setisTouched] = useState(``)   

    const isValid = validationFunc(inputValue);
    let newErrorMSG    
    const isError = !isValid && isTouched
    if(isError){
        newErrorMSG = errorMSG;
    }

    function onChange(e){
        setInputValue(e.target.value)
    }
    function onBlur(){
        setisTouched(true)
    }

    function reset(){
        setInputValue(``)
        setisTouched(``)
    }
    return {
        inputValue,
        isTouched,
        isValid,
        isError,
        onChange,
        onBlur,
        reset,
        errorMSG: newErrorMSG || ``
    }
}

export default useInput