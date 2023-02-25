import {getGifts} from "../helpers/get-gifs";
import {useEffect, useState} from "react";
export interface Igif {
    id: string,
    title: string,
    url: string
}
export const GiftGridComponent = ({categoria}: any)=> {
    // use efect ejecuta efectos secundarios, disparar cualquier cosa que necesitamos
    const [gifs, setGifs] = useState([]);
    const getGifs = async ()=> {
        const newGifs = await  getGifts(categoria);
        setGifs(newGifs);
    }
    useEffect(() => {
         getGifs();

    }, []); // si esta vacio significa que solo se dispara una vez cuando se crea el componente

    return(
        <>
            <div>
                <h2>
                    {categoria.id} - {categoria.nombre}
                </h2>
<ol>
    { gifs.map((gif: Igif) => (

            <li key={gif.id}>
                {gif.title}
            </li>

    ) ) }
</ol>



            </div>
        </>
            )

}
