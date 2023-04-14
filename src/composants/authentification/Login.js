import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    // Appel API axios
    axios.post('https://exemple.com/login', { email, password })
      .then(response => {
        console.log(response);
        // Faire quelque chose ici comme sauvegarder le token d'authentification dans le local storage et rediriger vers la page suivante.
      })
      .catch(error => {
        console.log(error);
        // Gérer les erreurs ici comme afficher un message d'erreur à l'utilisateur.
      });
  };

  return (
    <Container>
      <h1>Connexion</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrez votre mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Se connecter
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
