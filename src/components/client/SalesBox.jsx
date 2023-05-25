import { faCubes, faDesktop, faLongArrowDown, faLongArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SalesBox = () => {
  return (
<div>
  <div className="com-box">
    <div className="com-inner">
      <FontAwesomeIcon icon={faCubes} className='fa i-client' />
      <p className='p-client'>Orders</p>
      <p className='p-client'>$1,356</p>
      <p className='p-client'>
        <FontAwesomeIcon icon={faLongArrowDown} className='fa i-client downar' />
         -14.25%
      </p>
    </div>
  </div>
  <div className="com-box">
    <div className="com-inner">
      <FontAwesomeIcon icon={faDesktop} className='fa i-client' />
      <p className='p-client'>Sales</p>
      <p className='p-client'>$4,356</p>
      <p className='p-client' style={{color: 'green'}}>
        <FontAwesomeIcon icon={faLongArrowUp} className='fa i-client upnar' />
        +28.25%
      </p>
    </div>
  </div>
</div>



  )
}

export default SalesBox