import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      required: true,
      default: false,
    },
    readByBuyer: {
      type: Boolean,
      required: true,
      default: false,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Conversations = mongoose.model("Conversations", ConversationSchema);

export default Conversations;
