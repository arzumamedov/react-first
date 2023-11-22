import React from 'react'
import './index.css'
export default function Main() {
  return (
    <div className='main'>
      <div className='leftMain'>
        <h1>A Bootstrap 5 template for modern businesses</h1>
        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className='buttons'>
          <button className='btn1'>Get Started</button>
          <button className='btn2'>Learn More</button>
        </div>
      </div>
      <div className='rightMain'><img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" /></div>
    </div>
  )
}
