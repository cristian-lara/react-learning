import {UseCounter, UseFetch} from "../hooks/util.js";
import {Loading, QuoteBB} from "../components/index.js";



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
                        <Loading/>
                    )
                    :
                    (
                        data.map((value, index)=>{
                            return (
                                <QuoteBB key={index} {...value}/>
                            )
                        })


                    )
            }

            <button className="btn btn-info mx-2" onClick={decrement}>Previus</button>
            <button className="btn btn-info" onClick={onChangeUrl}>Next</button>


        </>
    );
};
