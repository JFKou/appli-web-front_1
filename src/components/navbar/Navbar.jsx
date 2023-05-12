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

    <div className='header'>
      {/* <a href="/" className="logo">
      <FontAwesomeIcon icon={faHome} className='i'/>
        <span>Logo</span>
      </a> */}
      <Link to='/dashboard' className='logo a'> 
      <FontAwesomeIcon icon={faHome} className='i'/>
      <span>Logo</span>
      </Link>
      
      <ul className={`navbar ${navbarOpen ? 'open' : ''}`}>
        <li>
          {/* <a href="/" className="active">
            Home
          </a> */}
          <Link to="/home" className='acive a'>Home</Link>
        </li>
        <li>
          {/* <a href="#">A Propos</a> */}
          <Link to="/about" className='a'>A Propos</Link>

        </li>
        <li>
          {/* <a href="#">Services</a> */}
          <Link to="/services" className='a'>Services</Link>

        </li>
        <li>
          {/* <a href="#">Contacts</a> */}
          <Link to="/contactus" className='a'>Contacts</Link>

          
        </li>
        
      </ul>
      <div className="main-nav">
        {/* <a href="#" className="user">
          <FontAwesomeIcon icon={faUser} className='i'/> Se connecter
        </a> */}
        <Link to="/login" className='user a'><FontAwesomeIcon icon={faUser} className='i'/> Se connecter</Link>


        {/* <a href="#">S'enregistrer</a> */}
        <Link to="/signup" className='a'>S'enregistrer</Link>

        <div className={`bx ${navbarOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={handleToggle}></div>
      </div>
    </div>
   
  );
};

export default Navbar;
