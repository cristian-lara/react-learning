import {getGifts} from "../helpers/get-gifs";
import {useEffect, useState} from "react";

export const GiftGridComponent = ({categoria}: any)=> {
    const [counter, setCounter] = useState(10);
    // use efect ejecuta efectos secundarios, disparar cualquier cosa que necesitamos
    useEffect(() => {
        getGifts(categoria);
    }, []); // si esta vacio significa que solo se dispara una vez cuando se crea el componente

    return(
        <>
            <div>
                <h3>
                    {categoria.id} - {categoria.nombre}
                </h3>
                <h5> {counter}</h5>
                <button onClick={()=> setCounter(counter +1)}>+1</button>
            </div>
        </>
            )

}
