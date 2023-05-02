import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import '../auth/authform.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function SignUp(props) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/register", formData)
      .then((response) => {
        // handle success, e.g. redirect to dashboard page
        history.push("/dashboard");
      })
      .catch((error) => {
        // handle error, e.g. display error message
        console.error(error);
      });
  };

  return (
    <div className="form signup">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            type="email"
            id="email-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FontAwesomeIcon icon={faEnvelope} className="i" />
          <label htmlFor="email-input">Email</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            id="password-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FontAwesomeIcon icon={faLock} className="i" />
          <label htmlFor="password-input">Mot de passe</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            id="confirm-password-input"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
          />
          <FontAwesomeIcon icon={faLock} className="i" />
          <label htmlFor="confirm-password-input">
            Confirmer le mot de passe
          </label>
        </div>
        <div className="inputBox">
          <input type="submit" value="S'inscrire" />
        </div>
      </form>
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
