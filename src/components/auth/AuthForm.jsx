
import './authform.css';

const Home = () => {
  return (
    <div className="container-home">
  <div className="row-home">
    <div className="col-home">
      <h1>Welcome</h1>
      <p>Bienvenue sur notre site de maintenance des extincteurs ! Nous sommes spécialisés dans 
        l'entretien et la révision d'extincteurs, assurant ainsi la sécurité de votre environnement.
        Notre équipe qualifiée et expérimentée s'occupe de tous les types d'extincteurs,
         des vérifications réglementaires aux réparations nécessaires.
         Avec notre service de maintenance professionnel, vous pouvez avoir l'esprit tranquille en 
         sachant que vos extincteurs sont en bon état de fonctionnement en cas d'urgence.
         <br/>N'hésitez pas à nous contacter pour planifier une intervention ou pour obtenir plus d'informations sur nos services de maintenance des extincteurs. Votre sécurité est notre priorité absolue !</p>
      <button className='button-home' type="button">Explore</button>
    </div>
    <div className="col-home">
      <div className="card-1 card1">
        {/* <h5>Western desert</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit.</p> */}
      </div>
      <div className="card-1 card2">
        {/* <h5>AI BAGAWAT</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit.</p> */}
      </div>
      <div className="card-1 card3">
        {/* <h5>Pyramid Of Giza</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit.</p> */}
      </div>
      <div className="card-1 card4">
        {/* <h5>WKalahari desert</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit.</p> */}
      </div>
    </div>
  </div>
</div>

  );
};

export default Home;
