import React from 'react'
import "./ProjectCard.css"
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
  return (
    <Link to= "/gigs?cat=design" className='link'>
        <div className='ProjectCard'>
        <img src={item.img}/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default ProjectCard