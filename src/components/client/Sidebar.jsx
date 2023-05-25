import { faSquareOdnoklassniki } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faCalendar, faChevronLeft, faClone, faFile, faFileText, faHome, faLock, faShield, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   <div className="sidebar-client">
  <h1 className="logo-client">Activi<span>.Link</span></h1>
  <FontAwesomeIcon icon={faChevronLeft} className='fa i-client menu-icon'/>
  <div className="sidenav-client ul-client">
    <li className="active-client">
      <FontAwesomeIcon icon={faHome} className='fa i-client'/>
        <Link className='a-client' to="#"> Dashboard
        <span className="span1"><FontAwesomeIcon icon={faAngleRight} className='fa i-client' /></span>
      </Link>
    </li>
    <div className="dropdown-client ul-client">
      <li><Link to="#" className='a-client'><span className="dot" /> Analytics</Link></li>
      <li><Link to="#" className='a-client'><span className="dot" /> CRM</Link></li>
      <li><Link to="#" className='a-client'><span className="dot" /> eCommerce</Link></li>
    </div>
    <li><FontAwesomeIcon icon={faFile} className='fa i-client' /><Link className='a-client' to="#"> Layout</Link></li>
    <p className="app-client p-client">App Ans Pages</p><li><FontAwesomeIcon icon={faCalendar} className='i-client'/>
    <Link className='a-client' to="/calendar"> Calendar</Link></li><li><FontAwesomeIcon icon={faClone} className='i-client'/>
    <Link className='a-client' to="#"> Invoice</Link>
    </li>
    <li><FontAwesomeIcon icon={faUser} className='fa i-client'/>
    <Link className='a-client' to="#"> User</Link></li>
    <li><FontAwesomeIcon icon={faShield} className='fa i-client'/>
    <Link className='a-client' to="#"> Permission</Link></li>
    <li><FontAwesomeIcon icon={faFileText} className='fa i-client'/>
    <Link className='a-client' to="#"> Pages</Link></li>
    <li><FontAwesomeIcon icon={faLock} className='fa i-client'/>
    <Link className='a-client' to="#"> Authentications</Link></li>
    <li> {/*<i className="fa fa-square-o" />*/}
    <FontAwesomeIcon icon={faSquareOdnoklassniki} className='fa i-client'/> 
    <Link className='a-client' to="#"> Modal Examples</Link></li>
  </div>
</div>   
  )
}

export default Sidebar