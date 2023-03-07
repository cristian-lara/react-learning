import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";
import {UseForm} from "../hooks/UseForm.js";

export const SimpleFormWithCustomHook = () => {
const {formState, onInputChange, userName, email, password, onResetForm} = UseForm({
    userName: '',
    email: '',
    password: '',
})

// const {userName, email, password} = formState
    return (
        <>
            <h1>Simple Form</h1>
            <hr/>
            <form >
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
                    <div className="col-md-6">
                        <input type="password"
                               className="form-control mt-2"
                               placeholder="password"
                               name="password"
                               value={password}
                               onChange={onInputChange}
                        />
                    </div>
                    <button className="btn btn-outline-warning mt-2" onClick={onResetForm}>Reset</button>
                </div>
            </form>

        </>
    );
};
