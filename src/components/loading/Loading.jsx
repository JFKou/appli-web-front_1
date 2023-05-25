import React from 'react'
import './loading.css'

function Loading () {

  return (
    <div className="body-loading">
      <div className = "container-loading">
        
          <div className="loader" role='status'><span> </span></div> 
      </div>
      <h3 className='h3-loading'>Chargement... Veuillez patienter</h3>
    </div>
  )
}

export default Loading