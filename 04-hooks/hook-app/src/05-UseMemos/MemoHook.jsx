import {UseCounter} from "../hooks/index.js";
import {Small} from "../components/Small.jsx";
import {useMemo, useState} from "react";


const heavyStuff = (iterableNumber =1000) =>{
    for(let i=0; i < iterableNumber; i++){
        console.log('gooo');
    }
    return ` ${iterableNumber} iteraciones realizadas`
}
export const MemoHook = () => {
    const {counter, increment} = UseCounter(1000)
    const [show, setShow] = useState(true);
    const valorMemorizado = useMemo(()=> heavyStuff(counter), [counter]);
    return (
        <>
            <h1>Counter
          <Small counter={counter} />
            </h1>

            <br/>

            <h4>{valorMemorizado}</h4>

            <button className="btn btn-primary"
            onClick={()=>increment(1)}
            >+1</button>

            <button onClick={()=>setShow(!show)} >Show/Hide {JSON.stringify(show)}</button>
        </>
    );
};
