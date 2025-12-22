import React from 'react'
import './message.css';
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className='breadcrumbs'>
          <Link to="/messages" className='link'>MESSAGES </Link> > John Doe >
        </span>
        <div className="messages">

          <div className="item">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet  corrupti alias corporis tempora eos provident natus vitae libero tenetur at. Quae eum cupiditate dolore libero nisi labore illum tenetur, exercitationem obcaecati facere ut rem a vel. Obcaecati asperiores blanditiis explicabo praesentium eaque dolores, magni placeat illum, ducimus beatae doloribus in odit similique excepturi ea aspernatur minima sit enim.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet  corrupti alias corporis tempora eos provident natus vitae libero tenetur at. Quae eum cupiditate dolore libero nisi labore illum tenetur, exercitationem obcaecati facere ut rem a vel. Obcaecati asperiores blanditiis explicabo praesentium eaque dolores, magni placeat illum, ducimus beatae doloribus in odit similique excepturi ea aspernatur minima sit enim.
            </p>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet  corrupti alias corporis tempora eos provident natus vitae libero tenetur at. Quae eum cupiditate dolore libero nisi labore illum tenetur, exercitationem obcaecati facere ut rem a vel. Obcaecati asperiores blanditiis explicabo praesentium eaque dolores, magni placeat illum, ducimus beatae doloribus in odit similique excepturi ea aspernatur minima sit enim.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet  corrupti alias corporis tempora eos provident natus vitae libero tenetur at. Quae eum cupiditate dolore libero nisi labore illum tenetur, exercitationem obcaecati facere ut rem a vel. Obcaecati asperiores blanditiis explicabo praesentium eaque dolores, magni placeat illum, ducimus beatae doloribus in odit similique excepturi ea aspernatur minima sit enim.
            </p>
          </div>
        </div>
        <hr />
          <div className="write">
            <textarea name="text" id="" placeholder= "Type a message" cols="30" rows="10"></textarea>
            <button type="button">Send</button>
          </div>
      </div>
    </div>
  )
}

export default Message