import {getGifts} from "../helpers/get-gifs";
import {useEffect, useState} from "react";
import {GifGridItemComponent} from "./gif-grid-item.component";
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
                <div className="card-grid">
                     { gifs.map((image: Igif) => (

                         // con el spreed podemos exparsir todos los atributos es una sintaxis valida
                        <GifGridItemComponent key={image.id} {...image} />

                        ) ) }
                </div>



            </div>
        </>
            )

}
