import React, { useEffect, useState } from 'react';
import './waitpage.css'
import close from '../assets/images/close.png'
import curve from '../assets/images/curve.png'
import man from '../assets/images/man.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'




const Countdown = () => {
  const countDate = new Date('Jun 14, 2023 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(gap / day);
      const hours = Math.floor((gap % day) / hour);
      const minutes = Math.floor((gap % hour) / minute);
      const seconds = Math.floor((gap % minute) / second);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="time">
        <div id="day">{timeLeft.days}</div>
        <span>Days</span>
      </div>
      <div className="time">
        <div id="hour">{timeLeft.hours}</div>
        <span>Hours</span>
      </div>
      <div className="time">
        <div id="minute">{timeLeft.minutes}</div>
        <span>Minutes</span>
      </div>
      <div className="time">
        <div id="second">{timeLeft.seconds}</div>
        <span>Seconds</span>
      </div>
    </div>
  );
};

const App = () => {
  const toggle = () => {
    const newsletter = document.querySelector('.newsletter');
    newsletter.classList.toggle('active');
  };

  return (
    <div className='wait-body'>
      <div className='wait-header' >
        <a href="#" className="wait-logo">Activilink</a>
        <nav>
          <ul>
            <li> <a href="#">Home</a></li>
          </ul>
        </nav>
      </div>
      <div className='wait-section'>
        <img src={curve} className="wave" alt="" />
        <div className="contentBx">
          <h2>Veuillez Patienter</h2>
          <p>Nos administrateurs vous donnerons accès à la plateforme d'ici peu</p>
          <Countdown />
          <a href="#" onClick={toggle}>Nous notifier</a>
        </div>
        <div className="imgBx">
          <img src={man} alt="" />
        </div>
        <ul className="sci">
          <li><a href="#"><img src={facebook} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={instagram} alt="" /></a></li>
        </ul>
      </div>
      <div className="newsletter">
        <h2>Stay Tuned</h2>
        <p>Soyez notifié au lancement</p>
        <div className="inputBox">
          <form action="">
            <input type="email" name="" required="" placeholder="Entrez votre Mail" />
            <input type="submit" value="Soumettre" />
          </form>
        </div>
        <img src={close} alt="" className="close" onClick={toggle} />
      </div>
    </div>
  );
};

export default App;
