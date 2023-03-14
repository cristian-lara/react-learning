import {memo} from "react";

export const Small = memo(({counter}) => {
    console.log('me volvi a dibujar')
    // memo memoriza y recibe como argumento el componente
    return (
        <>
            <small>{counter}</small>
        </>
    );
}) ;
