import bcrypt from "bcrypt";
import User from "../modals/User.js";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";
import { STATUS_CODES, STATUS_MESSAGES } from "../utils/constant.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(STATUS_CODES.CREATED).json({ message: STATUS_MESSAGES.CREATED });
  } catch (e) {
    next(createError(e.status, e.message));
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return next(
        createError(STATUS_CODES.NOT_FOUND, STATUS_MESSAGES.NOT_FOUND)
      );

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(
        createError(STATUS_CODES.WRONG_PASSWORD, STATUS_MESSAGES.WRONG_PASSWORD)
      );

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );
    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(STATUS_CODES.OK)
      .json({
        message: STATUS_MESSAGES.OK,
        body: info,
      });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: process.env.SECURE_COOKIES,
    })
    .status(STATUS_CODES.OK)
    .json({ message: STATUS_MESSAGES.OK });
};
