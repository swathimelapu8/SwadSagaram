import {useRouteError} from 'react-router'

const Error = () =>{
    const error = useRouteError();
    console.log(error);
    return <><h1>Oops! Something went wrong</h1><p>{error.status}</p></>

}

export default Error;