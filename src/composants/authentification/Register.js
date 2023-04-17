import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import '../../styles/Register.css';




const Register = () => {

  const handleSubmit=async(event)=>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    try{
      const response = await axios.post('https://#####', formData);
      console.log(response.data);// Affiche le résultat renvoyé par l'API en cas de succès
      // Ajouter ici votre code pour rediriger l'utilisateur à la page de confirmation d'inscription, etc.
    } catch(error){
      console.error(error);
      // Ajouter ici votre traitement des erreurs, afficher un message d'erreur, etc.

    }
  }
  return (
    <Container fluid='md' className='register-body'>
      <div className='register-main'>
      <h1 className='register'>Inscription</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-5" controlId="formBasicName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre nom" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrez votre mot de passe" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirmez le mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Confirmez votre mot de passe" />
        </Form.Group>

        <Button variant="primary" type="submit">
          S'inscrire
        </Button>

      </Form>
      </div>
    </Container>
  );
};

export default Register;
