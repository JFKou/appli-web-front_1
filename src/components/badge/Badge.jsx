import React from 'react'

import './badge.css'

const badge = props => {
  return (
    <span className={`badge badge-${props.type}`}>
    {props.content}
    </span>
  )
}

export default badge