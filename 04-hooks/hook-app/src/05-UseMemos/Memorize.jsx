import {UseCounter} from "../hooks/index.js";
import {Small} from "../components/Small.jsx";
import {useState} from "react";

export const Memorize = () => {
    const {counter, increment} = UseCounter(1)
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>Counter
          <Small counter={counter} />
            </h1>

            <button className="btn btn-primary"
            onClick={()=>increment(1)}
            >+1</button>

            <button onClick={()=>setShow(!show)} >Show/Hide {JSON.stringify(show)}</button>
        </>
    );
};
