import React from 'react'
import './loading.css'

function Loading () {

  return (
    <div className="body-1">
      <div className = "container">
        
          <div className="loader" role='status'><span> </span></div> 
      </div>
      <h3>Loading... Veuillez patienter</h3>
    </div>
  )
}

export default Loading