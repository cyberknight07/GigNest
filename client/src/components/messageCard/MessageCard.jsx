import React from "react";
import {
  ItemBox,
  ItemImage,
  ItemParagragh,
  OwnerItemBox,
} from "./MessageCard.styles";

const MessageCard = ({ index, message }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (message.userId === currentUser._id) {
    return (
      <OwnerItemBox key={index}>
        <div>
          <ItemImage src={currentUser?.img || "imgs/avatar.svg"} />
          <p>{message.message}</p>
        </div>
      </OwnerItemBox>
    );
  } else {
    console.log("true");
    return (
      <ItemBox key={index}>
        <ItemImage src="assets/gigimage.svg" />
        <ItemParagragh>{message.message}</ItemParagragh>
      </ItemBox>
    );
  }
};

export default MessageCard;
