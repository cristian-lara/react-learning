import {useState} from "react";

export const AddCategory = ({onAddCategoria}: any) => {
    const [value, setValue] = useState('hola');

    const onInputChanges = ({target}:any) => {
        setValue(target.value)
    }

    const onSubmit = (event : any) => {
        //evitamos que se recarge la pagina al enviar mi formulario
        event.preventDefault();

        // validacion para no registrar valores vacios
        if(value.length < 1) return;
      //  setCategoria(categorias=> [{nombre: value , id: categorias.length + 1}, ...categorias])
        // enviando eventos al padre
        onAddCategoria(value.trim())
        setValue('');
    }
    return(
        <>
        <h1>Agregar categoria</h1>
            <form onSubmit={onSubmit}>
                <input type="text"
                       value={value}
                       onChange={ onInputChanges }
                       placeholder = 'Buscar ghyps'
                />
            </form>

        </>
    )
}
