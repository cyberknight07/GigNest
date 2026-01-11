import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  OrdersContainer,
  OrdersHeader,
  OrdersTable,
  OrdersWrapper,
  Icon,
} from "./MyGigs.styles.js";
import newRequest from "../../utils/apiRequest.js";

const MyGigs = () => {
  const [myGigs, setMyGigs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await newRequest.get("gigs/mygigs");
        setMyGigs(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <OrdersWrapper>
      <OrdersContainer>
        <OrdersHeader>
          <h1>My Nest</h1>
          <Link to="/add">
            <button>Add Gig</button>
          </Link>
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
            {myGigs.map((gig, index) => (
              <tr key={index}>
                <td>
                  <img className="image" src={gig.cover} alt="image" />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <Icon src="/imgs/delete.svg" alt="" srcset="" />
                </td>
              </tr>
            ))}
          </tbody>
        </OrdersTable>
      </OrdersContainer>
    </OrdersWrapper>
  );
};

export default MyGigs;
