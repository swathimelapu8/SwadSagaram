import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import {useOnlineStatus} from '../utilities/useOnlineStatus';


function App() {

  const isOnline = useOnlineStatus();
  
  return (
    <div>
      <NavBar />
      <div style={{marginTop:'80px'}}></div>
        {!isOnline ? <h1>Looks like you are offline, please turn on the internet</h1>:<Outlet />}
      <Footer/>
      </div>
  );
}

export default App;    