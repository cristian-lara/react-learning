import {useRef} from "react";

export const FocusScreen = () => {
    // use ref permite guardar una referencia y no renderizar al cambiar
    const ref = useRef();
    const onClick = ()=>{
        document.querySelector('input').select();
    }
    return (
        <>
        <h1>Focus Screen</h1>

            <hr/>

            <input
                ref={ref}
                type="text"
                placeholder="ingrese nombre"
                className="form-control"
            />

            <button onClick={onClick}>Click</button>
        </>
    );
};
