import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon, point } from 'leaflet';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "leaflet/dist/leaflet.css";
import './map.css';

const Map = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Récupérer les sites depuis le backend
    axios.get(`/api/sites`)
      .then(res => {
        console.log(res)
        setSites(res.data);
        console.log(sites)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // create custom icon
  const mapIconUrl = require("../../assets/images/map.png");
  const customIcon = new Icon({
    iconUrl: mapIconUrl.default, // Utilisez mapIconUrl.default pour accéder à l'URL de l'image
    iconSize: [38, 38]
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
            {sites.map((item, index) => (
              <Marker
                key={index}
                position={[item.latitude, item.longitude]}
                icon={customIcon}
              >
                <Popup>{item.nom_site}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
