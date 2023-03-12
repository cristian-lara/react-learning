import {useState} from "react";

export const UseCounter = (initialValue) => {
     const [counter, setCounter] = useState(initialValue);
     const increment = (value)=> {
         if(value === 10){
             return
         }
      return   setCounter(counter+value);
     };
     const decrement = ()=> {
         if(counter === 0){
             return
         }
         setCounter(counter-1)
     };
     const reset = ()=> setCounter(initialValue)
     return {
         counter,
         increment,
         decrement,
         reset
     };
};
