import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateSites = () => {
  const [nomSite, setNomSite] = useState('');
  const [adresseSite, setAdresseSite] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [clientId, setClientId]=useState('');
  const [clients, setClients] = useState([]);



  useEffect(() => {
    // Récupérer la liste des clients depuis le backend
    axios.get('/api/clients')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const handleGeocode = () => {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${adresseSite}&key=45aa49fa029a4fdca2cd7f8edbfd0ece`)
      .then(response => response.json())
      .then(data => {
        const { lat, lng } = data.results[0].geometry;
        setLatitude(lat);
        setLongitude(lng);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    const siteData = {
      nom_site: nomSite,
      adresse_site: adresseSite,
      latitude: latitude,
      longitude: longitude,
      client_id: clientId, 
    };

    axios.post('/api/sites', siteData)
      .then(response => {
        console.log(response.data);
        setNomSite('');
        setAdresseSite('');
        setLatitude('');
        setLongitude('');
        setClientId('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Form>
            <Form.Group controlId="nomSite">
              <Form.Label>Nom du site</Form.Label>
              <Form.Control
                type="text"
                value={nomSite}
                onChange={e => setNomSite(e.target.value)}
                placeholder="Entrez le nom du site"
              />
            </Form.Group>
            <Form.Group controlId="adresseSite">
              <Form.Label>Adresse du site</Form.Label>
              <Form.Control
                type="text"
                value={adresseSite}
                onChange={e => setAdresseSite(e.target.value)}
                placeholder="Entrez l'adresse du site"
              />
            </Form.Group>
            <Form.Group controlId="ClientId">
                <Form.Label>Client</Form.Label>
                <Form.Control
                as="select"
                value={clientId}
                onChange={e => setClientId(e.target.value)}
                >
                <option value="">Sélectionnez un client</option>
                {clients.map(client => (
                    <option key={client.id} value={client.id}>
                    {client.nom_client}
                    </option>
                ))}
                </Form.Control>
            </Form.Group>
            <Button variant="primary"  onClick={handleGeocode}>Géocoder</Button>
            <Button variant="success" className='float-end' onClick={handleSubmit}>Ajouter le site</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateSites;
