import Gig from "../modals/Gig.js";
import Order from "../modals/order.js";

export const createOrder = async (req, res, next) => {
    try{

        const gig = await Gig.findById(req.params.gigId);
        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            price: gig.price,
            buyerId: req.userId,
            sellerId: gig.userId,
            payment_intent: "temporary"
        });

        await newOrder.save();
        res.status(201).json({message: "Order Created Successfull"});

    }catch(e) {next(e)}
}

export const getAllOrders = async (req, res, next) => {
    try{
        const orders = await Order.find({
            ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId})
        }).sort({createAt: -1});

        res.status(200).json({
            message: "Order fetched successfully", 
            data:orders});
    } catch(e) {next(e);}
}