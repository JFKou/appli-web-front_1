import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon, point } from 'leaflet';
import axios from 'axios';
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';
import './map.css';

  
  // // markers
  // const markers = [
  //   {
  //     geocode: [48.86, 2.3522],
  //     popUp: "Hello, I am pop up 1"
  //   },
  //   {
  //     geocode: [48.85, 2.3522],
  //     popUp: "Hello, I am pop up 2"
  //   },
  //   {
  //     geocode: [48.855, 2.34],
  //     popUp: "Hello, I am pop up 3"
  //   }
  // ];

const Map = () => {

  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Récupérer les sites depuis le backend
    axios.get(`/api/sites`)
      .then(response => {
        console.log(response)
        setSites(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // create custom icon
  const customIcon = new Icon({
    iconUrl: require('./téléchargement.png'),
    iconSize: [38, 38] // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true)
    });
  };

  return (
    <>
      <div className="map-container">
        <Link to="/sites-add" className="btn btn-primary float-end">
          Ajouter un site
        </Link>

        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
          {/* OPEN STREET MAPS TILES */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {/* Mapping through the sites */}
            {sites.map((item, index) => {
              return(
              <Marker
                position={[item.longitude, item.latitude]}
                icon={customIcon}
                key={index}
              >
                <Popup>{item.nom_site}</Popup>
              </Marker>
              );
            })}

{/* interventionDetails = interventions.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date_intervention}</td>
              <td>{item.date_proch_intervention}</td>
              <td>{item.notes_intervention}</td>
              <td>{item.extincteur_id}</td>
              <td>{item.technicien_id}</td>
              <td>
                <Link to={`/interventions/${item.id}`} className="btn btn-success"> Editer</Link>
              </td>
              <td>
                <button type="button" onClick={(e)=>deleteIntervention(e, item.id)} className="btn btn-danger">Supprimer</button>
              </td>
            </tr>
          )
        }); */}

          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;


  

      
 