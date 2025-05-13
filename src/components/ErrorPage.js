import { useRouteError } from "react-router";

const ErrorPage=()=>{
    const errorType=useRouteError();
    return(
        <div className="error-page">
            <h1>{"Error "+errorType.status}</h1>
            <br/>
            <h1>{"Page "+errorType.statusText}</h1>
            <h5>Kindly contact us at this email</h5>
        </div>
    )
}

export default ErrorPage;