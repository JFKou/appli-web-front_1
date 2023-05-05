import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import '../auth/authform.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
axios.get('/sanctum/csrf-cookie').then(response => {
  axios.post("http://127.0.0.1:8000/api/login", { email, password }, {
    headers: {
    }
    })
      .then(response => {
        
        // On récupère le token d'authentification dans la réponse
        const token = response.data.token;

        // On enregistre le token dans le localStorage
        localStorage.setItem("token", token);

        // On redirige l'utilisateur en fonction de son rôle
        if (response.data.user.role === "admin") {
          history.push("/admin");
        } 
        else if(response.data.user.role === "user"){
          history.push("/client");
        }
        else {
          history.push("/error");
        }
      })
      .catch(error => {
        console.error(error);
      });
});
    
  }

  return (
    <div className="form signin">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin} >
      
        <div className="inputBox">
          <input type="email" id="email-input" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <FontAwesomeIcon icon={faEnvelope} className="i" />        
          <label htmlFor="email-input">Email</label>
        </div>
        <div className="inputBox">
          <input type="password" id="password-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <FontAwesomeIcon icon={faLock} className="i" /> 
          <label htmlFor="password-input">Mot de passe</label>
        </div>
        <div className="inputBox">
          <input type="submit" value="se connecter" />
        </div>
      </form>
      <p>
        Vous n'avez pas de compte?{" "}
         <a href="https" className="a create" onClick={props.switchToSignUp}>
        {" "}
        Creer un compte
        </a>  
        {/* <Link to="/signup" className="a create" >Creer un compte</Link> */}
      </p>
    </div>
  );
}

export default Login;
