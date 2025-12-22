import React from 'react'
import "./Feature.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className="left">
                <h1>
                    Find the perfect <i>freelance</i> services for your business.
                </h1>
                <div className="search">
                    <span className="search-text">
                        <img src='src/assets/avatar.png'/>
                        <input type='text' name='search' placeholder='search'/>
                    </span>
                    <button>Search</button>
                </div>
                <div className="popular-results">
                    <text>Popular:</text>
                    <button>Hero</button>
                    <button>Villan </button>
                    <button>Rowdy</button>
                </div>
            </div>
            <div className="right">
                <img src='src/assets/avatar.png' className='banner-image'/>
            </div>
        </div>

    </div>
  )
}

export default Featured