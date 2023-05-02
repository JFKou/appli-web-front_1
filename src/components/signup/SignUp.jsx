import React from "react";

import '../auth/authform.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function SignUp(props) {
  return (
    <div className="form signup">
      <h2>Créer un compte</h2>
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
        <input type="password" id="confirm-password-input" required />
        <FontAwesomeIcon icon={faLock} className="i" />  
        <label htmlFor="confirm-password-input">Confirmer le mot de passe</label>
      </div>
      <div className="inputBox">
        <input type="submit" value="S'inscrire" />
      </div>
      <p>
        Vous avez déjà un compte?{" "}
        <a href="#" className="create" onClick={props.switchToLogin}>
          {" "}
          Se connecter
        </a>
      </p>
    </div>
  );
}

export default SignUp;
