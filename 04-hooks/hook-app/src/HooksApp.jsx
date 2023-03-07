import Button from "bootstrap/js/src/button.js";
import {CounterApp} from "./01-use-state/CounterApp.jsx";
import {CounterWithCustomHook} from "./01-use-state/CounterWithCustomHook.jsx";
import {SimpleForm} from "./02-UseEffect/SimpleForm.jsx";
import {SimpleFormWithCustomHook} from "./02-UseEffect/SimpleFormWithCustomHook.jsx";
import {MultipleCustomHook} from "./02-UseEffect/MultipleCustomHook.jsx";

export const HooksApp = () => {
    return (
        <>
            {/*<CounterWithCustomHook/>*/}
            {/*<SimpleFormWithCustomHook/>*/}
            {<MultipleCustomHook/>}
        </>
    );
};
