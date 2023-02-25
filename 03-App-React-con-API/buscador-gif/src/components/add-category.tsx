import {useState} from "react";

export const AddCategory = () => {
    const [value, setValue] = useState('hola');

    const onInputChanges = ({target}) => {
        setValue(target.value)
    }

    const onSubmit = (event) => {
        event.target.preventDefault();
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
