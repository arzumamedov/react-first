import React from 'react'
import "./Index.css"
const Card = (props) => {
  return (
    <div className='card'>
      <div className='border'></div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Card