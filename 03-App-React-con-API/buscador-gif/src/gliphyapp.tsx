import {useState} from "react";
import {AddCategory} from "./components/add-category";
export const GliphyApp = () => {

    const [categorias, setCategorias] = useState([{nombre: 'a', id: 1}, {nombre:'b', id: 2}]);
    console.log('categorias', categorias)
    const addCategory = (value)=>{
        // no es bueno usar el push ya que muta el objeto
    setCategorias([{nombre: value, id: categorias.length + 1},...categorias, ])
    }
    return (
        <>
            {/*titulo*/}
        <h1>App cargada</h1>
        {/*input*/}

            {/* envaindo la funcion al hijo
            <AddCategory  setCategoria = { setCategorias } /> */}
            <AddCategory  onAddCategoria = {addCategory} />
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
