import React, {useEffect, useState} from "react";
import { TableRow } from "./OrderRow.styles";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/apiRequest";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchUser () {
      const res = (await newRequest("users/single/" + order.sellerId));
      console.log(res.data.data)
      setUsername(() => res?.data?.data?.username);
    } // Can we add the order details to seller account from OrderRow?
    fetchUser();
  }, []);

  console.log(order);
  return (
    <TableRow>
      <td>
        <img src={order.img} className="image" alt="image" />
      </td>
      <td>
        <h4>{order.title}</h4>
      </td>
      <td>
        <h4>${order.price}</h4>
      </td>
      <td>
        <h4>{username}</h4>
      </td>
      <td>
        <img
          src="imgs/message.svg"
          style={{ color: "blue", width: "20px", cursor: "pointer" }}
          onClick={() => navigate(`/message/${order.sellerId}`)}
        />
      </td>
    </TableRow>
  );
};

export default OrderRow;
