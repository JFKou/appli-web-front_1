import React from 'react'

const SalesBox = () => {
  return (
<div>
  <div className="com-box">
    <div className="com-inner">
      <i className="fa fa-cubes" />
      <p>Orders</p>
      <p>$1,356</p>
      <p><i className="fa fa-long-arrow-down downar" /> -14.25%</p>
    </div>
  </div>
  <div className="com-box">
    <div className="com-inner">
      <i className="fa fa-desktop" />
      <p>Sales</p>
      <p>$4,356</p>
      <p style={{color: 'green'}}><i className="fa fa-long-arrow-up upnar" /> +28.25%</p>
    </div>
  </div>
</div>



  )
}

export default SalesBox