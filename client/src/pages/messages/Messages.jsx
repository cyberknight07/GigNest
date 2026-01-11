/*TODO
  1. Automate messages from live data 
  2. Map data
*/

import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  MessagesWrapper,
  TabularWrapper,
} from "./Messages.styles.js";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/apiRequest.js";
import ConversationCard from "../../components/conversationCard/ConversationCard.jsx";


const Messages = () => {
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus, fugiat voluptatibus quisquam  consequatur maxime amet nisi?";

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const fetchConversations = async () => {
    try {
      const res = await newRequest.get("conversations");
      console.log(res?.data?.data);
      return res?.data?.data;
    } catch (error) {
      return error?.message;
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coversations"],
    queryFn: fetchConversations,
  });

  return (
    <MessagesWrapper>
      <Container>
        <Heading>Conversations</Heading>
        <TabularWrapper>
          <thead>
            <tr>
              <th>{currentUser?.body?.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date/Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <div>Loading...</div>}
            {isError && <div>{error?.message}</div>}
            {!data ? (
              <div>No Coversation Available, Start New</div>
            ) : (
              <>
                {data.map((conversation, index) => (
                  <ConversationCard conversation = {conversation} key= {index}/>
                ))}
              </>
            )}
            
          </tbody>
        </TabularWrapper>
      </Container>
    </MessagesWrapper>
  );
};

export default Messages;
