import React from 'react'
import './index.css'
export default function Header() {
  return (
    <div className='nav'>
      <div className='leftNav'><p>Start Bootstrap</p>
</div>
      <div className='rightNav'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </div>
  )
}
