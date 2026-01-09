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
import { Oval } from "react-loader-spinner";
import newRequest from "../../utils/apiRequest.js";
import OrderRow from "../../components/orderRow/OrderRow.jsx";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  let user = JSON.parse(localStorage.getItem("currentUser")); // isko seedhe api k response se aana chahiye either using middleware with provide user as request.
  // const handleConversation = async (toAddress) => {
  //   try {
  //     await newRequest.post("conversations", toAddress);
  //     console.log("Conversation created. Add a Message to chat.");
  //   } catch (error) {
  //     console.log("Coversation Api - Orders -> " + error);
  //   }
  // };

  useEffect(() => {
    try {
      setLoading(true);
      const fetchOrders = async () => {
        const res = await newRequest.get("orders");
        setOrders(() => res?.data?.data);
        setLoading(false);
      };
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <OrdersWrapper>
      <OrdersContainer>
        <OrdersHeader>
          <h1>Orders</h1>
          <Link to="/explore">
            <button>Add new order</button>
          </Link>
        </OrdersHeader>
        {loading && (
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
            wrapperStyle={{ display: "flex", justifyContent: "center" }}
          />
        )}
        {!loading && !orders && (
          <div>Nothing to show here. Make a new order.</div>
        )}
        /* Not working */
        {!loading && orders && (
          <OrdersTable>
            <thead>
              <tr>
                <th>Images</th>
                <th>Title</th>
                <th>Price</th>
                <th>{user?.body?.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((orderData, index) => {
                return <OrderRow key={index} order={orderData} />;
              })}
            </tbody>
          </OrdersTable>
        )}
      </OrdersContainer>
    </OrdersWrapper>
  );
};

export default Orders;
