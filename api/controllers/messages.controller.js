import Conversations from '../modals/conversation';
import Messages from '../modals/messages.js'

export const createMessage = async (req, res, next) => {
   
    const newMessage = new Messages({
        consversationId: req.body.conversationId,
        userId: req.userId,
        desc: req.body.desc,
    });
   
    try{

        const savedMessage = await newMessage.save();
        await Conversations.findOneAndUpdate({id: req.body.consversationId}, {
            $set: {
                readBySeller: req.isSeller,
                readByBuyer: !req.isSeller,
                lastMessage: req.body.desc,

            }
        }, {new: true});
        res.status(201).send(savedMessage);

    } catch(e){next(e);}
}


export const getMessages = async (req, res, next) => {
    try{

        const messages = await Messages.find({conversationId: req.params.conversationId});
        res.status(200).send(messages);

    } catch(e){next(e);}
}