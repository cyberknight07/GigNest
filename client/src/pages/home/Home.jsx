import React from 'react'
import "./Home.css";
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { data } from '../../data'
import Slide from '../../components/slide/Slide'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide data={data}/>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src='./imgs/check.png'/>
              The best for every budget
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iusto!</p>
              <div className="title">
              <img src='./imgs/check.png'/>
              The best for every budget
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iusto!</p>
              <div className="title">
              <img src='./imgs/check.png'/>
              The best for every budget
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iusto!</p>
          </div>
          <div className="item">
            <video src='./imgs/video.mp4' controls/>
          </div>
        </div>
      </div>
      <Slide data={data}/>
    </div>
  )
}

export default Home