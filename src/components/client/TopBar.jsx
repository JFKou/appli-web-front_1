import { faBell, faCog, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
<div className="main-top">
  <input type="text" name className="input-client" placeholder="Search" />
  <div className="top-right">
    {/* <i className="fa fa-bell-o topicon bell" /> */}
    <FontAwesomeIcon icon={faBell} className='i-client' />
    <div className="notification-div">
      <p className='p-client'>Success!Your registration is now complete!</p>
      <p className='p-client'>Here's some information you may find useful!</p>			
    </div>
    <Link to='' className="user1 a-client">
      <img src='../../' alt='image1' className="user-client" />
      <div className="profile-div">
        <p className='p-client'><FontAwesomeIcon icon={faUser} className='i-client' />&nbsp;&nbsp;Profile
        </p>
        <p className='p-client'><FontAwesomeIcon icon={faCog} className='i-client' />&nbsp;&nbsp;Settings
        </p>
        <p className='p-client'>
        <FontAwesomeIcon icon={faPowerOff} className='i-client' />&nbsp;&nbsp;Log Out
        </p>
      </div>
    </Link>
  </div>
</div>


  )
}

export default Topbar