// import { faSquareOdnoklassniki } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faCalendar, faChevronLeft, faFile, faFileText, faHome, faLock, faShield, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Sidebar = () => {
  
  const history=useHistory();

  function logOut(){
  localStorage.clear('auth_token');
  history.push('/login');
  }

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
    <p className="app-client p-client">Applications & Pages</p><li><FontAwesomeIcon icon={faCalendar} className='i-client'/>
    <Link className='a-client' to="/calendar"> Calendrier</Link></li>
    <li><FontAwesomeIcon icon={faUser} className='fa i-client'/>
    <Link className='a-client' to="#"> Utilisateur</Link></li>
    <li><FontAwesomeIcon icon={faShield} className='fa i-client'/>
    <Link className='a-client' to="#"> Permission</Link></li>
    <li><FontAwesomeIcon icon={faFileText} className='fa i-client'/>
    <Link className='a-client' to="#"> Pages</Link></li>
    <li><FontAwesomeIcon icon={faLock} className='fa i-client'/>
    <Link className='a-client' to="#" onClick={logOut}> Se deconnecter</Link></li>

    {/* only to complete the longer of the sidebar */}
    <li>
    <Link className='a-client' to="#"></Link>
    </li>

    <li>
    <Link className='a-client' to="#"></Link>
    </li>
    
  </div>
</div>   
  )
}

export default Sidebar