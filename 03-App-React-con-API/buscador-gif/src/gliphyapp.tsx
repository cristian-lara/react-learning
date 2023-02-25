import {useState} from "react";
import {AddCategory} from "./components/add-category";
import {GiftGridComponent} from "./components/gift-grid.component";
export interface ICategoria {
    nombre: string;
    id: number;
}
export const GliphyApp = () => {

    const [categorias, setCategorias] = useState([{nombre: 'ichigo', id: 1}]);
    console.log('categorias', categorias)
    const addCategory = (value: string )=>{
        // no es bueno usar el push ya que muta el objeto
    setCategorias([{nombre: value, id: categorias.length + 1},...categorias, ])
    }
    return (
        <>
        <h1>App cargada</h1>
        {/*input*/}

            {/* envaindo la funcion al hijo
            <AddCategory  setCategoria = { setCategorias } /> */}
            <AddCategory  onAddCategoria = {addCategory} />
            {/*Listado*/}
                {
                    categorias.map((categoria: ICategoria )=> (
                            <GiftGridComponent key= {categoria.id} categoria= {categoria} />
                        )
                    )
                }
        </>
    )
}

export default GliphyApp;
