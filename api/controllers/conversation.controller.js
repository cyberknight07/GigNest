import Conversations from "../modals/conversation.js"

export const createConversation = async (req, res, next) => {
    const newConversation = new Conversations({

        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
        
    });

    try{

        const savedConversation = await newConversation.save();
        res.status(201).send(savedConversation);

    } catch(e){ next(e)}
}

export const updateConversation = async (req, res, next) => {
    try{

        const updatedConversation = await Conversations.findOneAndUpdate(
            {id: req.params.id},
            {
                $set: {
                    // readBySeller: true,
                    // readByBuyer: true,
                    ...(req.isSeller ? {readBySeller: true} : {readByBuyer: true})
                },
            },
            { new: true}    
        );

        res.status(200).send(updatedConversation);

    }catch(e) { next(e);}
}



export const getSingleConversation = async (req, res, next) => {
    try{

        const coversation = await Conversations.findOne({id: req.params.id});
        res.status(200).send(coversation);

    }catch(e) { next(e);}
}



export const getConversations = async (req, res, next) => {
    try{

        const coversations = await Conversations.find(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId});
        res.status(200).send(coversations);

    }catch(e) { next(e);}
}