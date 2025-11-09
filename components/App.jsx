import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import {useOnlineStatus} from '../utilities/useOnlineStatus';
import { Provider } from "react-redux";
import appStore from "../store/appstore";

function App() {

  const isOnline = useOnlineStatus();
  console.log("the store");
  console.log(appStore);
  return (
    <Provider store={appStore}>
      
    <div>
      <NavBar />
      <div style={{marginTop:'80px'}}></div>
        {!isOnline ? <h1>Looks like you are offline, please turn on the internet</h1>:<Outlet />}
      <Footer/>
      </div>
      </Provider>
  );
}

export default App;    