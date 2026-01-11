import React from "react";
import { ItemBox, ItemImage, ItemParagragh, OwnerItemBox } from "./MessageCard.styles";

const MessageCard = ({ index, message }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (message.userId === currentUser._id) {
    console.log("true");
    return (
      <OwnerItemBox key={index}>
        <div>
          <ItemImage
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt=""
        />
        <p>{message.message}</p>
        </div>
      </OwnerItemBox>
    );
  } else{
    console.log("true");
    return (
    <ItemBox key={index}>
      <ItemImage
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt=""
      />
      <ItemParagragh>
        {message.message}
      </ItemParagragh>
    </ItemBox>
  );
  }
};

export default MessageCard;
