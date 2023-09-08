import React from 'react';
import './About.css'; // Assurez-vous d'avoir un fichier de styles CSS pour cette page

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">À Propos de Nous</h2>
        <p className="about-description">
          Bienvenue chez <span className="company-name">ACTIVILINK</span>, votre partenaire de confiance en matière de sécurité incendie et de maintenance d'extincteurs. Notre passion pour la sécurité et notre engagement envers l'excellence font de nous votre choix évident pour tous vos besoins en matière de prévention des incendies.
        </p>
        <p className="about-description">
          Chez <span className="company-name">ACTIVILINK</span>, nous comprenons l'importance capitale d'une maintenance régulière des extincteurs pour garantir la sécurité de vos locaux et la protection de vos occupants. Notre équipe dévouée de professionnels qualifiés est prête à mettre en œuvre son expertise pour assurer que chaque extincteur est en parfait état de fonctionnement.
        </p>
        <p className="about-description">
          Notre engagement envers la sécurité va au-delà des services que nous offrons. Nous aspirons à être un partenaire stratégique pour votre entreprise, travaillant main dans la main pour créer un environnement sûr et conforme aux normes de sécurité incendie en vigueur.
        </p>
        <p className="about-description">
          Laissez-nous prendre soin de vos extincteurs et vous offrir la tranquillité d'esprit que vous méritez. Faites confiance à <span className="company-name">ACTIVILINK</span> pour des services de qualité, une réactivité exemplaire et un engagement sans faille envers votre sécurité.
        </p>
      </div>
    </div>
  );
}

export default About;
