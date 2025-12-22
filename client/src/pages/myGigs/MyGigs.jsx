import React from 'react'
import "./myGigs.css";
import { Link } from 'react-router-dom';

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className='header'>
          <h1>My Nest</h1>
          <Link to= "/add" className= ""><button>Add new Gig</button></Link>
        </div>
        <table>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
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
              <img className='delete' src="public/imgs/delete.png" alt="" srcset="" />
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
              <img className='delete' src="public/imgs/delete.png" alt="" srcset="" />
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
              <img className='delete' src="public/imgs/delete.png" alt="" srcset="" />
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
              <img className='delete' src="public/imgs/delete.png" alt="" srcset="" />
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
              <img className='delete' src="public/imgs/delete.png" alt="" srcset="" />
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
              <img className='delete' src="public/imgs/delete.png" alt="" srcset="" />
            </td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default MyGigs