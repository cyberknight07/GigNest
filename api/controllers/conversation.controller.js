import Conversations from "../modals/conversation.js";
import { STATUS_CODES, STATUS_MESSAGES } from "../utils/constant.js";
import { createError } from "../utils/createError.js";

export const createConversation = async (req, res, next) => {
  const newConversation = new Conversations({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(STATUS_CODES.CREATED).json({
      message: STATUS_MESSAGES.CREATED,
      data: savedConversation,
    });
  } catch (e) {
    next(createError(STATUS_CODES.CONFLICT, e.message));
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversations.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          // readBySeller: true,
          // readByBuyer: true,
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    res.status(STATUS_CODES.OK).json({
      message: STATUS_MESSAGES.OK,
      data: updatedConversation,
    });
  } catch (e) {
    next(e);
  }
};

export const getSingleConversation = async (req, res, next) => {
  try {
    const coversation = await Conversations.findOne({ id: req.params.id });
    res.status(STATUS_CODES.OK).json({
      message: STATUS_MESSAGES.OK,
      data: coversation,
    });
  } catch (e) {
    next(e);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const coversations = await Conversations.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    res.status(STATUS_CODES.OK).json({
      message: STATUS_MESSAGES.OK,
      data: coversations,
    });
  } catch (e) {
    next(e);
  }
};
