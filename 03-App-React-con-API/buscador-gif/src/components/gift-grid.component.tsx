import {getGifts} from "../helpers/get-gifs";
import {useEffect, useState} from "react";
import {GifGridItemComponent} from "./gif-grid-item.component";
import {UseFetchGifs} from "../hooks/use-fetch-gifs";
export interface Igif {
    id: string,
    title: string,
    url: string
}
export const GiftGridComponent = ({categoria}: any)=> {

    const {images, isLoading} = UseFetchGifs(categoria)

    console.log('is loading', isLoading)

    return(
        <>
            <div>
                <h2>
                    {categoria.id} - {categoria.nombre}
                </h2>
                {/* forma uno de usar
                    {
                        isLoading
                        ? (<h2>...Cargando</h2>)
                        : null
                }
                */}
                {
                    isLoading && (<h2>...Cargando</h2>)
                }
                <div className="card-grid">
                     { images.map((image: Igif) => (

                         // con el spreed podemos exparsir todos los atributos es una sintaxis valida
                        <GifGridItemComponent key={image.id} {...image} />

                        ) ) }
                </div>



            </div>
        </>
            )

}
