import React, { useState } from 'react';
import './navbar.css';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (

    <div className='header-navbar'>
      <Link to='/dashboard' className='logo-header a' style={{ textDecoration: 'none' }}> 
      <FontAwesomeIcon icon={faHome} className='i'/>
      <span>Logo</span>
      </Link>
      
      <ul className={`navbar ${navbarOpen ? 'open' : ''}`}>
        <li>

          <Link to="/" className='acive a' style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" className='a' style={{ textDecoration: 'none' }}>A Propos</Link>
        </li>
        <li>
          <Link to="/services" className='a' style={{ textDecoration: 'none' }}>Services</Link>
        </li>
        <li>
          <Link to="/contactus" className='a'style={{ textDecoration: 'none' }}>Contacts</Link>
        </li>   
      </ul>
      <div className="main-nav">
        <Link to="/login" className='user a' style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faUser} className='i'/> Se connecter</Link>
        <Link to="/signup" className='a' style={{ textDecoration: 'none' }}>S'enregistrer</Link>

        <div className={`bx ${navbarOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={handleToggle}></div>
      </div>
    </div>
   
  );
};

export default Navbar;
