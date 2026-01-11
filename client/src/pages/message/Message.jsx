import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  MessageWrapper,
  Container,
  MessagesBox,
  HorizontalLine,
  WriterForm,
} from "./Message.styles";
import MessageCard from "../../components/messageCard/MessageCard";
import newRequest from "../../utils/apiRequest";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Message = () => {

  const {id} = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();
  const fetchMessages = async () => {
      try {
        const messages = await newRequest.get(`/messages/${id}`)
        console.log(messages.data);
        return messages.data.data;
      } catch (error) {
          console.log(error);
      }
  }

  const {data: messages, isLoading, isError, error} = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages
  })

  const sendMessage = async (message) => {
    try {
      const res = await newRequest.post("messages/createMessage", message);
      return res.data.data;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('text');
    
    mutate({conversationId: id, message: message})

    e.target.reset();
   }


  const {mutate} = useMutation({
    mutationFn: sendMessage,
    onMutate: () => {return {id: 1}},
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
        exact: true
      })
    }


  })

  return (
    <MessageWrapper>
      <Container>
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES{" "}
          </Link>{" "}
          {">"} John Doe {">"}
        </span>
        <MessagesBox>
          {isLoading && <div>Messages.....</div>}
          {isError && <div>{error}</div>}
          {!messages && <div>Say Hi!</div>}
          {console.log(messages)}
          {messages?.map((message, index) => (
              <MessageCard key= {index} message = {message}/>
            ))}
        </MessagesBox>
        <HorizontalLine />
        <WriterForm onSubmit={handleSubmit}>
          <textarea
            name="text"
            placeholder="Type a message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" >Send</button>
        </WriterForm>
      </Container>
    </MessageWrapper>
  );
};

export default Message;
