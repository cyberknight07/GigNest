import React from 'react'
import { Link } from 'react-router-dom';
import {
  MessageWrapper,
Container,
MessagesBox,
ItemBox,
ItemImage,
ItemParagragh,
HorizontalLine,
WriterBox
} from './Message.styles';
import newRequest from '../../utils/apiRequest';

const Message = () => {

  const sendMessage = async (e) => {

    e.preventDefault();

    try{

      await newRequest.post("messages/createMessage", {
        
      });

    } catch(e) {
      console.log(e);
    }
    
  }


  return (
    <MessageWrapper>
      <Container>
        <span className='breadcrumbs'>
          <Link to="/messages" className='link'>MESSAGES </Link> {'>'}  John Doe {'>'}
        </span>
        <MessagesBox>

          <ItemBox>
            <ItemImage src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" srcset="" />
            <ItemParagragh>
              Lorem ipsum dolor sit amet  corrupti alias corporis tempora eos provident natus vitae libero tenetur at. Quae eum cupiditate dolore libero nisi labore illum tenetur, exercitationem obcaecati facere ut rem a vel. Obcaecati asperiores blanditiis explicabo praesentium eaque dolores, magni placeat illum, ducimus beatae doloribus in odit similique excepturi ea aspernatur minima sit enim.
            </ItemParagragh>
          </ItemBox>
          <ItemBox>
            <ItemImage src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <ItemParagragh>
              Lorem ipsum dolor sit amet  corrupti alias corporis tempora eos provident natus vitae libero tenetur at. Quae eum cupiditate dolore libero nisi labore illum tenetur, exercitationem obcaecati facere ut rem a vel. Obcaecati asperiores blanditiis explicabo praesentium eaque dolores, magni placeat illum, ducimus beatae doloribus in odit similique excepturi ea aspernatur minima sit enim.
            </ItemParagragh>
          </ItemBox>
          
        </MessagesBox>
        <HorizontalLine />
          <WriterBox>
            <textarea name="text" id="" placeholder= "Type a message" cols="30" rows="10"></textarea>
            <button type="button">Send</button>
          </WriterBox>
      </Container>
    </MessageWrapper>
  )
}

export default Message