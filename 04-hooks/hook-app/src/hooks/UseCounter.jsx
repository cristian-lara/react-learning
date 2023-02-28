import {useState} from "react";

export const UseCounter = (initialValue) => {
     const [counter, setCounter] = useState(initialValue);
     const increment = (value)=> setCounter(counter+value);
     const decrement = ()=> setCounter(counter-1);
     const reset = ()=> setCounter(initialValue)
     return {
         counter,
         increment,
         decrement,
         reset
     };
};
