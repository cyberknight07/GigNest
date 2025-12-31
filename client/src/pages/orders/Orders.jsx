// TODO
// 1. Order added from database
// 2. Click over message icon will route to message->user

import React from "react";
import { Link } from "react-router-dom";
import {
  OrdersContainer,
  OrdersHeader,
  OrdersTable,
  OrdersWrapper,
} from "./Orders.styles.js";
const Orders = () => {
  return (
    <OrdersWrapper>
      <OrdersContainer>
        <OrdersHeader>
          <h1>Orders</h1>
          <Link to="/add">
            <button>Add new order</button>
          </Link>
        </OrdersHeader>
        <OrdersTable>
          <thead>
            <tr>
              <th>Images</th>
              <th>Title</th>
              <th>Price</th>
              <th>Buyer</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt=""
                  srcset=""
                />
              </td>
              <td>Gig 1</td>
              <td>$25</td>
              <td>11</td>
              <td>
                <img
                  className="order"
                  src="public/imgs/message.png"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt=""
                  srcset=""
                />
              </td>
              <td>Gig 1</td>
              <td>$25</td>
              <td>123</td>
              <td>
                <Link to="/message/123">
                  <img
                    className="order"
                    src="public/imgs/message.png"
                    alt=""
                    srcset=""
                  />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt=""
                  srcset=""
                />
              </td>
              <td>Gig 1</td>
              <td>$25</td>
              <td>11</td>
              <td>
                <img
                  className="order"
                  src="public/imgs/message.png"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt=""
                  srcset=""
                />
              </td>
              <td>Gig 1</td>
              <td>$25</td>
              <td>11</td>
              <td>
                <img
                  className="order"
                  src="public/imgs/message.png"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt=""
                  srcset=""
                />
              </td>
              <td>Gig 1</td>
              <td>$25</td>
              <td>11</td>
              <td>
                <img
                  className="order"
                  src="public/imgs/message.png"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
          </tbody>
        </OrdersTable>
      </OrdersContainer>
    </OrdersWrapper>
  );
};

export default Orders;