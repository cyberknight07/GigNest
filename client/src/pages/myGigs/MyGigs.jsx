// TODO
// 1. Gigs added from database 



import React from 'react'
import { Link } from 'react-router-dom';
import { OrdersContainer, OrdersHeader, OrdersTable, OrdersWrapper, Icon } from './MyGigs.styles.js';
const MyGigs = () => {
  return (
    <OrdersWrapper>
      <OrdersContainer>
        <OrdersHeader>
          <h1>My Nest</h1>
          <Link to="/add"><button>Add Gig</button></Link>
        </OrdersHeader>
        <OrdersTable>
          <thead>
            <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Buyer</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
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
             <Icon src="/imgs/delete.png" alt="" srcset="" />
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
             <Icon src="/imgs/delete.png" alt="" srcset="" />
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
              <Icon src="/imgs/delete.png" alt="" srcset="" />
            </td>
          </tr>
          </tbody>
        </OrdersTable>
      </OrdersContainer>
    </OrdersWrapper>
  )
}

export default MyGigs;