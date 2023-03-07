import {useEffect} from "react";

export const Message = () => {

    useEffect(() => {
        console.log('componente creado')
        const mouseEvent = (event)=>console.log('event', event)
        window.addEventListener('mousemove', mouseEvent)
        return () => {
            console.log('componente destruido')
            window.removeEventListener('mousemove', mouseEvent);
        };
    }, []);

    return (
        <>
        <h3>El usuario ya existe</h3>
        </>
    );
};
