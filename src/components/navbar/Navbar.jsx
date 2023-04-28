import React, { useState } from 'react';
import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header>
      <a href="/" className="logo">
      <FontAwesomeIcon icon={faHome} className='i'/>
        <span>Logo</span>
      </a>
      <ul className={`navbar ${navbarOpen ? 'open' : ''}`}>
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">A Propos</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li> 
      </ul>
      <div className="main">
        <a href="#" className="user">
          <FontAwesomeIcon icon={faUser} className='i'/> Se connecter
        </a>
        <a href="#">S'enregistrer</a>
        <div className={`bx ${navbarOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={handleToggle}></div>
      </div>
    </header>
  );
};

export default Navbar;
