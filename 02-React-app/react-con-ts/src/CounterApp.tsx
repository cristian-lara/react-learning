import  { useState } from 'react';
function Counter({valor = 0}) {

    const [count, setCount] = useState(valor);
    const handleAdd  = () => setCount(count + 1);

    const handleSubstract  = () => setCount(count - 1);

    const handleReset  = () => setCount(valor);


    return (
        <>
        <h1>Counter App</h1>
        <h2>{ count }</h2>
            <button onClick={
                handleAdd
            }>
                +1
            </button>
            <button onClick={
                handleSubstract
            }>
                -1
            </button>

            <button onClick={
                handleReset
            }>
                Reset
            </button>
        </>
    )
}

export default Counter;
