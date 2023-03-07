import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        userName: '',
        email: 'a@a.com'
    });

    const {userName, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({...formState, [name]: value})
    }

    // efectos aqui
// primer argumento el callback
    // arreglo de depencias es decir razones por als cuales quiero disparar si esta vacio indica que solo queremos se ejecute una vez
    // podemos tener varios use efect para cada accion que queremos controlar
    useEffect(() => {
      console.log('cambio el formulario')
    }, [formState]);
    useEffect(() => {
        console.log('cambio el email')
    }, [email]);


    // useEffect(() => {
    //     //codigo
    //     return () => {
    //         // limpiar cualquier cosa
    //     };
    // }, [
    //     //dependencias
    // ]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <input type="text"
                           className="form-control mt-2"
                           placeholder="User Name"
                           name="userName"
                           value={userName}
                           onChange={onInputChange}
                    />
                </div>
                {
                    (userName === 'hola') && <Message/>
                }
                <div className="col-md-6">
                    <input type="text"
                           className="form-control mt-2"
                           placeholder="example@a.com"
                           name="email"
                           value={email}
                           onChange={onInputChange}
                    />
                </div>
            </div>
        </>
    );
};
