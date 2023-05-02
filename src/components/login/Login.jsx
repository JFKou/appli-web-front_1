import React from "react";

import '../auth/authform.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";




function Login(props) {
  return (
            
            <div className="form signin">
            <h2>Se connecter</h2>
            <div className="inputBox">
                <input type="email" id="email-input" required />
                <FontAwesomeIcon icon={faEnvelope} className="i" />        
                <label htmlFor="email-input">Email</label>
            </div>
            <div className="inputBox">
                <input type="password" id="password-input" required />
                <FontAwesomeIcon icon={faLock} className="i" /> 
                <label htmlFor="password-input">Mot de passe</label>
            </div>
            <div className="inputBox">
                <input type="submit" value="se connecter" />
            </div>
            <p>
                Vous n'avez pas de compte?{" "}
                 <a href="#" className="a create" onClick={props.switchToSignUp}>
                {" "}
                Creer un compte
                </a>  
                {/* <Link to="/signup" className="a create" >Creer un compte</Link> */}
            </p>
            </div>
             
      
  );
}

export default Login;
