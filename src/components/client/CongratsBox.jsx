import images from '../../assets/images/fig4.png'
import React from 'react'

const CongratsBox = () => {
  return (
<div className="cong-box">
  <div className="content">
    <p className="head p-client">Lorem ipsum dolor sit amet consectetur 🎉</p><br />
    <p className='p-client'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem ratione minima enim e.</p>
    <button className="btn">Voir tout</button>
  </div>
  <img src={images} alt="" />
</div>

  )
}

export default CongratsBox