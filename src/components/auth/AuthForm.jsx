
import './authform.css';

const Home = () => {
  return (
    <div className="container-home">
  <div className="row-home">
    <div className="col-home">
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Magnam fugiat soluta 
        inventore repellendus nostrum temporibus 
        saepe deserunt praesentium id a? Lorem ipsum  
        tempore accusamus culpa laboriosam. Id?</p>
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
