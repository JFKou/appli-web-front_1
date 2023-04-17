import '../../styles/Login.css';

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import Register from './Register';
import { AiOutlineMail } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Appel API axios
    axios
      .post('https://exemple.com/login', { email, password })
      .then((response) => {
        console.log(response);
        // Faire quelque chose ici comme sauvegarder le token d'authentification dans le local storage et rediriger vers la page suivante.
      })
      .catch((error) => {
        console.log(error);
        // Gérer les erreurs ici comme afficher un message d'erreur à l'utilisateur.
      });
  };

  return (
  
    <Container className='login-body'>
      <div className='login-main'>
        <h1 className='connexion'>Connexion</h1>
            <div className='login'>
              <Form onSubmit={handleSubmit} >
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label className='login-label'>
                    <AiOutlineMail />Email
                  </Form.Label>
                  <Form.Control className='login-input'
                    type='email'
                    placeholder='Entrez votre email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label className='login-label'>
                    <FiLock />Mot de passe
                  </Form.Label>
                  <Form.Control className='login-input'
                    type='password'
                    placeholder='Entrez votre mot de passe'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <div>
                <Button variant='primary' type='submit' className='button-login'>
                  Se connecter
                </Button>
                </div>
                <h6>Vous n'avez pas de compte? </h6>
                <Button as={Link} to='/register' type='submit' className='button-register'>Créez un compte</Button>
              </Form>
            </div>
          <div>
            
            <Routes>
              <Route path='/register' element={<Register />} />
            </Routes> 
          </div>
      </div>
    </Container>
  
  );
};

export default Login;
