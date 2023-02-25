import {ICategoria} from "../gliphyapp";

export const getGifts = async(categoria: ICategoria)=> {
    const {nombre} = categoria;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rFkEO0zH3V71jMig9oQgFiazRwsOIDr1&q=${nombre}&limit=25&offset=0&rating=g&lang=en`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs =data.map((img: any) => ({id: img.id, title: img.title, url:img.images.downsized_medium.url}));
    console.log('gifs', gifs)
    return gifs;
}
