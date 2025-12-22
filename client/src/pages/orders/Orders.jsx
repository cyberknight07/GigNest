import React from 'react'
import "./orders.css";
import { Link } from 'react-router-dom';
const Orders = () => {
  return (
    <div className="orders">
      <div className="container">
        <div className='header'>
          <h1>Orders</h1>
          <Link to="/add"><button>Add new order</button></Link>
        </div>
        <table>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Buyer</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className= "image" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            </td>
            <td>
              Gig 1
            </td>
            <td>
              $25
            </td>
            <td>
              11
            </td>
            <td>
              <img className='order' src="public/imgs/message.png" alt="" srcset="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            </td>
            <td>
              Gig 1
            </td>
            <td>
              $25
            </td>
            <td>
              123
            </td>
            <td>
              <Link to="/message/123"><img className='order' src="public/imgs/message.png" alt="" srcset="" /></Link>
            </td>
          </tr>
          <tr>
            <td>
              <img className= "image" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            </td>
            <td>
              Gig 1
            </td>
            <td>
              $25
            </td>
            <td>
              11
            </td>
            <td>
              <img className='order' src="public/imgs/message.png" alt="" srcset="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            </td>
            <td>
              Gig 1
            </td>
            <td>
              $25
            </td>
            <td>
              11
            </td>
            <td>
              <img className='order' src="public/imgs/message.png" alt="" srcset="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className= "image" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            </td>
            <td>
              Gig 1
            </td>
            <td>
              $25
            </td>
            <td>
              11
            </td>
            <td>
              <img className='order' src="public/imgs/message.png" alt="" srcset="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            </td>
            <td>
              Gig 1fdsffsffsfddfffffffffffffffffffffffffff
            </td>
            <td>
              $25
            </td>
            <td>
              11
            </td>
            <td>
              <img className='order' src="public/imgs/message.png" alt="" srcset="" />
            </td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default Orders;