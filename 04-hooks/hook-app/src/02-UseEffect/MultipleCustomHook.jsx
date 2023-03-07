import {UseFetch} from "../hooks/UseFetch.js";
import {UseCounter} from "../hooks/UseCounter.jsx";

export const MultipleCustomHook = () => {


    // console.log('data:' ,data, 'isLoading', isLoading,'hasError', hasError)
    const {increment, decrement, counter} = UseCounter(1)
    console.log('counter', counter)
    const urlMain = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    const {data, isLoading, hasError}= UseFetch(urlMain);

    const onChangeUrl = ()=>{
        increment(1);
    }
    return (
        <>
        <h1>Multiple custom hook</h1>
            <hr/>
            {
                isLoading ? (
                        <div className="alert alert-info text-center">
                            ...Cargando
                        </div>
                    )
                    :
                    (
                        data.map((value, index)=>{
                            return (
                                <blockquote key={index} className="blockquote text-end">
                                    <p>{value.quote}</p>
                                    <footer className="blockquote-footer">{value.author}</footer>
                                </blockquote>
                            )
                        })


                    )
            }

            <button className="btn btn-info mx-2" onClick={decrement}>Previus</button>
            <button className="btn btn-info" onClick={onChangeUrl}>Next</button>


        </>
    );
};
