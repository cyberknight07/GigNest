import React, {useEffect, useState} from "react";
import { TableRow } from "./OrderRow.styles";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/apiRequest";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  let user = JSON.parse(localStorage.getItem("currentUser"));

  

  useEffect(() => {
    async function fetchUser () {
      const res = (await newRequest.get("users/single/" + (user?.body?.isSeller ? order.buyerId : order.sellerId)));
      setUsername(() => res?.data?.data?.username);
    } 
    fetchUser();
  }, []);

  const handleConversation = async () => {
    try {

      const res = await newRequest.post("conversations", {to: (user?.body?.isSeller ? order.buyerId : order.sellerId)});
      console.log(res.data.data);
      navigate(`/message/${order.sellerId+order.buyerId}`);
  
    } catch (err) {
      if(err.status === 409){
        return navigate(`/message/${order.sellerId+order.buyerId}`);
      }
      console.log(err);
    } 
  }

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
          onClick={handleConversation}
        />
      </td>
    </TableRow>
  );
};

export default OrderRow;
