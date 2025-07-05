import NavBar from "./NavBar";
import Restraunts from "./Restraunts";
import Footer from "./Footer";
import React,{useState} from "react";
import { Outlet } from "react-router";
import {useOnlineStatus} from '../utilities/useOnlineStatus';


function App() {

  const isOnline = useOnlineStatus();
  
  return (
    <div>
      <NavBar />
      {!isOnline ? <h1>Looks like you are offline, please turn on the internet</h1>:<Outlet/>}
      <Footer/>
    </div> 
  );
}

export default App;    