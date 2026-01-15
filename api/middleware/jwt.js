import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";
import { STATUS_CODES, STATUS_MESSAGES } from "../utils/constant.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token)
    return next(
      createError(STATUS_CODES.UNAUTHORIZED, STATUS_MESSAGES.UNAUTHORIZED)
    );

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err)
      return next(
        createError(STATUS_CODES.FORBIDDEN, STATUS_MESSAGES.FORBIDDEN + err)
      );
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
