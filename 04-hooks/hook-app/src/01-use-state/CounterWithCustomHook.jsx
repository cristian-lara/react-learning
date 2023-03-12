import {UseCounter} from "../hooks/UseCounter.js";

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = UseCounter(10)
    const value = 2;
    return (
        <>
        <h1>Counter with hook: {counter}</h1>
            <hr/>
            <button onClick={() => increment(value)} className="btn btn-outline-dark">+{value}</button>
            <button onClick={reset} className="btn btn-outline-dark">Reset</button>
            <button onClick={decrement} className="btn btn-outline-dark">-1</button>
        </>
    );
};
