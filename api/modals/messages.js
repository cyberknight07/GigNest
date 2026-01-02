import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    conversationId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

const Messages = mongoose.model("Messages", MessageSchema);

export default Messages;