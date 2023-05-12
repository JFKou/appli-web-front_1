import { faSquareOdnoklassniki } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faCalendar, faChevronLeft, faClone, faFile, faFileText, faHome, faLock, faShield, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sidebar = () => {
  return (
   <div className="sidebar">
  <h1 className="logo-client">Activi<span>.Link</span></h1>
  <FontAwesomeIcon icon={faChevronLeft} className='i-client'/>
  <ul className="sidenav-client">
    <li className="active">
      <FontAwesomeIcon icon={faHome} className='i-client'/>
        <a href="#"> Dashboard
        <span className="span1"><FontAwesomeIcon icon={faAngleRight} className='i-client' /></span>
      </a>
    </li>
    <ul className="dropdown">
      <li><a href="#"><span className="dot" /> Analytics</a></li>
      <li><a href="#"><span className="dot" /> CRM</a></li>
      <li><a href="#"><span className="dot" /> eCommerce</a></li>
    </ul>
    <li><FontAwesomeIcon icon={faFile} className='i-client' /><a href="#"> Layout</a></li>
    <p className="app">App Ans Pages</p><li><FontAwesomeIcon icon={faCalendar} className='i-client'/>
    <a href="#"> Calendar</a></li><li><FontAwesomeIcon icon={faClone} className='i-client'/>
    <a href="#"> Invoice</a></li>
    <li><FontAwesomeIcon icon={faUser} className='i-client'/>
    <a href="#"> User</a></li>
    <li><FontAwesomeIcon icon={faShield} className='i-client'/>
    <a href="#"> Permission</a></li>
    <li><FontAwesomeIcon icon={faFileText} className='i-client'/>
    <a href="#"> Pages</a></li>
    <li><FontAwesomeIcon icon={faLock} className='i-client'/>
    <a href="#"> Authentications</a></li>
    <li> {/*<i className="fa fa-square-o" />*/}
    <FontAwesomeIcon icon={faSquareOdnoklassniki} className='i-client'/> 
    <a href="#"> Modal Examples</a></li>
  </ul>
</div>   
  )
}

export default Sidebar