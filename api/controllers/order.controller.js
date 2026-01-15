import Gig from "../modals/Gig.js";
import Order from "../modals/order.js";
import { STATUS_CODES, STATUS_MESSAGES } from "../utils/constant.js";

export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);

    if (!gig)
      return res
        .status(STATUS_CODES.NO_CONTENT)
        .json({ message: STATUS_MESSAGES.NO_CONTENT });

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      price: gig.price,
      buyerId: req.userId,
      sellerId: gig.userId,
      payment_intent: "temporary",
    });

    await newOrder.save();
    res.status(STATUS_CODES.CREATED).json({ message: STATUS_MESSAGES.CREATED });
  } catch (e) {
    next(e);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
    }).sort({ createAt: -1 });

    res
      .status(STATUS_CODES.OK)
      .json({ message: STATUS_MESSAGES.OK, data: orders });
  } catch (e) {
    next(e);
  }
};
