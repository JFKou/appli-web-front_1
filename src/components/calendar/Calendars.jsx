import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/fr';
import axios from 'axios';
import './calendars.css'

moment.locale('fr');

function Calendars() {
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
    <CalendarContainer>
      <Calendar calendarType='US' value={date} onChange={handleDateChange} tileContent={tileContent} />
    </CalendarContainer>
  );
}

export default Calendars;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 100%; //alongé la largeur
  margin: auto;
  margin-top: 20px;
  background-color: #cbcbe2;
  padding: 10px;
  border-radius: 3px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: #696cff;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 30px 0; //alongé la hauteur

    &:hover {
      background-color: #556b55;
    }

    &:active {
      background-color: #a5c1a;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px red;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, 
  .react-calendar__decade-view__years, 
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;




 

