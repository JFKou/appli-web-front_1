

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/fr';
import axios from 'axios';

import './calendars.css'

moment.locale('fr');

const Calendars = () => {
  const [date, setDate] = useState(new Date());
  const [interventions, setInterventions] = useState([]);

  useEffect(() => {
    // Récupérer les données des interventions depuis l'API
    axios.get('/api/interventions')
      .then(response => {
        // Mettre à jour l'état des interventions avec les données reçues
        setInterventions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const tileContent = ({ date, view }) => {
    // Vérifier si la date correspond à une intervention
    const formattedDate = moment(date).format('YYYY-MM-DD');

    const intervention = interventions.find(intervention => {
      return intervention.date_intervention === formattedDate || intervention.date_proch_intervention === formattedDate;
    });

    if (intervention) {
      if (view === 'month') {
        // Afficher un point pour les mois
        return (
          <div className="intervention-marker"></div>
        );
      } else if (view === 'year') {
        // Afficher le mois pour les années
        return (
          <div className="intervention-month">{moment(date).format('MMM')}</div>
        );
      } else {
        // Afficher les dates pour les jours
        return (
          <div className="intervention-date">
            {moment(date).format('D')}
            <div className="intervention-details">
              Intervention : {moment(intervention.date_intervention).format('D MMM YYYY')}
              <br />
              Prochaine intervention : {moment(intervention.date_proch_intervention).format('D MMM YYYY')}
            </div>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div className='main-calandar'>
      <Calendar value={date} onChange={handleDateChange} tileContent={tileContent} />
    </div>
  );
}

export default Calendars;
