import React from 'react'
 
import Footer from '../components/footer/Footer'
import Navbar  from '../components/navbar/Navbar'


const Home = () => {
  return (
    <div>
       <div className="home-header">
        <Navbar/>
      </div> 
      <div className="home-content"></div>
       
       <div className="home-footer">
        <Footer/>
      </div>
  
    </div>
  )
}

export default Home