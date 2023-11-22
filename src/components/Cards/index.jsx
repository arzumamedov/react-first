import React from 'react'
import './index.css'
import Card from '../Card'
import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"
import {faSortDown} from "@fortawesome/free-solid-svg-icons"
const Cards = () => {
  return (
    <div className='main2'>
      <div className='leftMain2'>
        <h3>A better way to start building.</h3>
      </div>
      <div className='rightMain2'>
      <div className='cards'>
      <Card title="Featured title" description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
      <Card title="Featured title" description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
      <Card title="Featured title" description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
      <Card title="Featured title" description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />

    </div>
      </div>
    </div>
  )
}
export default Cards
