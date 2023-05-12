import { faBell, faCog, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Topbar = () => {
  return (
<div className="main-top">
  <input type="text" name className="input-client" placeholder="Search" />
  <div className="top-right">
    {/* <i className="fa fa-bell-o topicon bell" /> */}
    <FontAwesomeIcon icon={faBell} className='i-client' />
    <div className="notification-div">
      <p>Success!Your registration is now complete!</p>
      <p>Here's some information you may find useful!</p>			
    </div>
    <a href="#" className="user1"><img src="image/user.png" className="user" />
      <div className="profile-div">
        <p><i className="fa fa-user" /><FontAwesomeIcon icon={faUser} className='i-client' />
 &nbsp;&nbsp;Profile</p>
        <p><i className="fa fa-cog" />    <FontAwesomeIcon icon={faCog} className='i-client' />
 &nbsp;&nbsp;Settings</p>
        <p><i className="fa fa-power-off" />
        <FontAwesomeIcon icon={faPowerOff} className='i-client' />
 &nbsp;&nbsp;Log Out</p>
      </div>
    </a>
  </div>
  <div className="clearfix" />
</div>


  )
}

export default Topbar