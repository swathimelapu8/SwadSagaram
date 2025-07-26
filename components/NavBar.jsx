import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'; 


function NavBar() {
  
  const [btnText,setbtnText] = useState("Login");
  return (
    <div className="navbar">
        <div className="logo">
            <div><Link to="/" className="logo-link">SwadSagaram</Link></div>
        </div>
        <div>
            <ul className="nav-items">
                <li className="nav-item" ><Link to="/about" className="nav-item-link">About</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-item-link">Contact</Link></li>
                <li className="nav-item"><Link to="/cart" className="nav-item-link" >Cart</Link></li>
            </ul>
        </div>
        <div>
        <button onClick={()=> setbtnText((prev)=> {
          return prev === 'Login'?'Logout':'Login'
        })} style={{border:'none',backgroundColor:'transparent', color:'white','fontSize':'20px',fontWeight:'bolder'}}>{btnText}</button>
        </div>
    </div>
  );
}

export default NavBar;