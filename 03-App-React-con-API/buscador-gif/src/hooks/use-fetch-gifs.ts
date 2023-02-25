import {ICategoria} from "../gliphyapp";
import {useEffect, useState} from "react";
import {getGifts} from "../helpers/get-gifs";

// un custom hook y cualquier hook no es mas que una funcion en este caso estamos retornando las imagenes y el valor de is loading

export const UseFetchGifs = (categoria: ICategoria) => {
    // use efect ejecuta efectos secundarios, disparar cualquier cosa que necesitamos
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getGifs = async ()=> {
        const newGifs = await  getGifts(categoria);
        setGifs(newGifs);
    }
    useEffect(() => {
        getGifs();
        setIsLoading(false)

    }, []); // si esta vacio significa que solo se dispara una vez cuando se crea el componente
    return {
        images: gifs,
        isLoading
}
};
