import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert'

import './signup.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function SignUp() {

  const history = useHistory();

  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
    });

    const handleInput = (e) => {
      e.persist();
      setRegister({...registerInput, [e.target.name]: e.target.value });
      }

    const registerSubmit = (e) => {
      e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
      } 

      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/register`, data).then(res => {
        if(res.data.status === 200)
        {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        swal("Success",res.data.message,"success");
        history.push('/wait');
        }
        else
        {
        setRegister({...registerInput, error_list: res.data.validation_errors});
        }
        });
        });
        }
    

  return (
    <div className="body">
    <div className="container">
    <div className="form signup">
      <h2>Créer un compte</h2>
      <form onSubmit={registerSubmit}>
      <div className="inputBox">
          <input
            type="text"
            id="text-input"
            name="name"
            value={registerInput.name}
            onChange={handleInput}
            required
          />
          <FontAwesomeIcon icon={faEnvelope} className="i" />
          <label htmlFor="text-input">Nom</label>
          <span>{registerInput.error_list.name}</span>
          {/* <span>{registerInput.error_list && registerInput.error_list.name}</span> */}

        </div>
        <div className="inputBox">
          <input
            type="email"
            id="email-input"
            name="email"
            value={registerInput.email}
            onChange={handleInput}
            required
          />
          <FontAwesomeIcon icon={faEnvelope} className="i" />
          <label htmlFor="email-input">Email</label>
          <span>{registerInput.error_list.email}</span>

        </div>
        <div className="inputBox">
          <input
            type="password"
            id="password-input"
            name="password"
            value={registerInput.password}
            onChange={handleInput}
            required
          />
          <FontAwesomeIcon icon={faLock} className="i" />
          <label htmlFor="password-input">Mot de passe</label>
          <span>{registerInput.error_list.password}</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="S'inscrire" />
        </div>
      </form>
      <p>
        Vous avez déjà un compte?{" "}
        <Link to='/login' className="create">
          {" "}
          Se connecter
        </Link>
      </p>
    </div>
    </div>
    </div>
  );
}

export default SignUp;
