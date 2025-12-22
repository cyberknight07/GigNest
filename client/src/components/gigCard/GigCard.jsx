import React from 'react'
import "./gigcard.css"
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <Link to= "/gig/:id" className='link'>
        <div className='gigcard'>
        <img src={item.img} className='gig-image'/>
        <div className='info'>
            <span className='user'>
                <img src={item.pp} className='pp' />
                <text>{item.username}</text>
            </span>
            <p>{item.desc}</p>
            <span className='stars'>
                <img src="./public/imgs/star.png"  />
                {item.star}
            </span>
        </div>
        <hr/>
        <div className='details'>
            <img src="./public/imgs/heart.png" />
            <div className="price">
                <p>Starting at</p>
                <p>${item.price}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default GigCard