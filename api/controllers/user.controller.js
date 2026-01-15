import User from "../modals/User.js";
import { STATUS_CODES, STATUS_MESSAGES } from "../utils/constant.js";
import { createError } from "../utils/createError.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id)
    return next(createError(STATUS_CODES.FORBIDDEN, STATUS_MESSAGES.FORBIDDEN));

  await User.findByIdAndDelete(req.params.id);
  res.status(STATUS_CODES.ACCEPTED).json({ message: STATUS_MESSAGES.ACCEPTED });
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return next(createError(STATUS_CODES.NOT_FOUND, STATUS_MESSAGES.NOT_FOUND));

  res.status(STATUS_CODES.OK).json({ message: STATUS_MESSAGES.OK, data: user });
};
