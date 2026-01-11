import Conversations from "../modals/conversation.js";
import Messages from "../modals/messages.js";

export const createMessage = async (req, res, next) => {
  const newMessage = new Messages({
    userId: req.userId,
    message: req.body.message,
    conversationId:req.body.conversationId,
  });

  try {
    const savedMessage = await newMessage.save();
    await Conversations.findOneAndUpdate(
      { id: req.body.consversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Message Sent successfully", data: savedMessage });
  } catch (e) {
    next(e);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Messages.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json({message: "Messages fetched Successfully", data: messages});
  } catch (e) {
    next(e);
  }
};
