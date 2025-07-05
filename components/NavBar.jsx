import './NavBar.css';
import {Link} from 'react-router';

function NavBar() {
  

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
    </div>
  );
}

export default NavBar;