import {useState} from "react";
import {AddCategory} from "./components/add-category";
export const GliphyApp = () => {

    const [categorias, setCategorias] = useState([{nombre: 'a', id: 1}, {nombre:'b', id: 2}]);
    console.log('categorias', categorias)
    const addCategory = ()=>{
        // no es bueno usar el push ya que muta el objeto
    setCategorias([...categorias, {nombre:'c', id: 3}])
    }
    return (
        <>
            {/*titulo*/}
        <h1>App cargada</h1>
        {/*input*/}
            <AddCategory  setCategoria = { setCategorias } />
            {/*Listado*/}
            <ol>
                {
                    categorias.map((categoria)=> {
                        return <li key={categoria.id}> {categoria.nombre}</li>
                    })
                }
            </ol>

        </>
    )
}

export default GliphyApp;
