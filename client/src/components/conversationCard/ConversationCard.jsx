import React, { useState, useEffect } from "react";

import { TableRow } from "./ConversationCard.styles";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/apiRequest";

const ConversationCard = ({ conversation, index }) => {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  const [data, setData] = useState();
  
  const [isLoading, setIsLoading] = useState(false);

  // const fetchSender = async (sender) => {
  //   const res = await newRequest.get(`users/single/${sender}`);
  //   console.log(res?.data?.data.username);
  //   return res?.data?.data;
  // };

  // const { data, isLoading } = useQuery({
  //   queryKey: ["messageBy"],
  //   queryFn: () =>
  //     fetchSender(
  //       user?.body?.isSeller ? conversation.buyerId : conversation.sellerId
  //     ),
  // });
  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchSender = async (sender) => {
        const res = await newRequest.get(`users/single/${sender}`);
        console.log(res?.data?.data.username);
        setData(res?.data?.data);
        setIsLoading(false);
      };
      fetchSender(user?.body?.isSeller ? conversation.buyerId : conversation.sellerId);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const calcDate = (dt1) => {
    const dt2 = Number(Date.now());
    const dt = Number(Date.parse(dt1));
    const date = Number(dt2 - dt);
    const days = Math.ceil(date / (1000 * 60 * 60 * 24));

    if (date / (1000 * 60 * 60 * 24) < 1)
      return Math.ceil(date / (1000 * 60)).toString() + "min ago";

    return `${days} days ago`;
  };

  return (
    <TableRow key={index}>
      {isLoading && (<td>Loading....</td>)}
      <td>
        <span>
          <img src={data?.img || "assets/avatar.svg"} />
          {console.log("first ", conversation)}
          <h4>{data?.username || "JohnDoe"}</h4>
        </span>
      </td>
      <td>
        <h4>
          <a href={`/message/${conversation.id}`} className="link">
            {conversation.message || `Say! Hi to ${data?.username}`}
          </a>
        </h4>
      </td>
      <td>
        <h4>{calcDate(conversation?.createdAt)}</h4>
      </td>
      <td>
        {!conversation?.readbySeller && (
          <button className="read">Mark as Read</button>
        )}
      </td>
    </TableRow>
  );
};

export default ConversationCard;
