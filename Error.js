
import { useRouteError } from "react-router-dom";

const Error = () =>{
    const error = useRouteError();
    console.log(error)
    return(
        <div>
            <h1 className="font-bold text-center">OPSSS...</h1>
            <h2 className="font-bold text-center">SOMETHING WENT WRONG...</h2>
            <h3 className="font-bold text-center">{error.status}</h3>
            <h3 className="font-bold text-center">{error.status}</h3>
            <h4 className="">{error.statusText}</h4>
        </div>
    )
}

export default Error;