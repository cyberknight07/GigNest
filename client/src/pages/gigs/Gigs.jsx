import React, { useState } from 'react'
import { gigs } from '../../data'
import GigCard from '../../components/gigCard/GigCard.jsx'
import "./gigs.css"

const Gigs = () => {

  const sortingList = ["Best Selling", "High to Low", "Low to High"];
  const [sorting, setSorting] = useState(sortingList[0]);
  const [active, setActive] = useState(true);

  return (
    <div className="gigs">
      <div className="container">
        <p>Gignest - Graphics & Design</p>
      <h1>AI Artists</h1>
      <p>Explore the boundaries of art and technology with Gignest AI Artists</p>
      <div className="filter-header">
        <div className='filter'>
          <span>Budget</span>
          <input type='text' name='min' placeholder='min'/>
          <input type='text' name='max' placeholder='max'/>
          <button>Apply</button>
        </div>
        <div className="sorting">
          <span>Sort By:</span>
          <div className='dropdown'>
            <p onClick={() => setActive(!active)}>{sorting}</p>
            {active && (<div className='dropdownList'>
              {sortingList.map((sort,index) => (
               <>
               <hr/>
               <p onClick={() => {setSorting(sortingList[index]); setActive(!active)}}>{sort}</p> 
               </>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
      <div className='giglist'>
      {gigs.map((item) => (
        <GigCard key={item.id} item={item}/>
      ) 
      )}
    </div>
      </div>
    </div>
  )
}

export default Gigs