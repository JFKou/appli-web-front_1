import React from 'react'

import './error.css'

import { Link } from 'react-router-dom'

const Error = () => {
  return (
  <div>
  <div className="page_404">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center">404</h1>
            </div>
            <div className="content_box_404">
              <h3 className="error-h3">Il me semble que vous êtes perdu!</h3>
              <p className='wait-p'>La page que vous cherchez est introuvable</p>
              <Link className='wait-a' to='/'>Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Error