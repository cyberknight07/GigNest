// TODO
// 1. Order added from database
// 2. Click over message icon will route to message->user

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  OrdersContainer,
  OrdersHeader,
  OrdersTable,
  OrdersWrapper,
} from "./Orders.styles.js";

import newRequest from "../../utils/apiRequest.js"

const Orders = () => {

  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConversation = async (toAddress) => {
      try {
        await newRequest.post("conversations", toAddress);
        console.log("Conversation created. Add a Message to chat.");

      } catch (error) {
          console.log("Coversation Api - Orders -> "+error)
      }
  }

  useEffect(() =>{
    try {
      setLoading(true);
      const fetchOrders = async () => {
        const res = await newRequest.get("orders");
        console.log(res?.data?.data);
        setOrders((prev) => [...prev, res?.data?.data]);
        setLoading(false)
      }
      fetchOrders();
    } catch (error) {
        console.log(error);
    }
  }, [orders]);

  return (
    <OrdersWrapper>
      <OrdersContainer>
        <OrdersHeader>
          <h1>Orders</h1>
          <Link to="/explore">
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
            {
              loading && (<></>)
            }
          </tbody>
        </OrdersTable>
      </OrdersContainer>
    </OrdersWrapper>
  );
};

export default Orders;
