import React from 'react'
import "./catcard.css"
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to= "/gigs?cat=design" className='link'>
        <div className='catcard'>
        <img src={item.img}/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCard