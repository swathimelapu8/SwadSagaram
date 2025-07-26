import {useRouteError,useNavigate} from 'react-router-dom'

const Error = () =>{

    const error = useRouteError();
    console.log(error);
    const navigate = useNavigate();
    
    return <><h1>Oops! Something went wrong</h1><p>{error.status}</p>
    <button onClick={() => navigate('/')}>Go Home</button></>

}

export default Error;