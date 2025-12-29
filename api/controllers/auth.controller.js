import bcrypt from "bcrypt";
import User from "../modals/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createError } from "../utils/createError.js";

export const register = async (req, res, next) => {
    try{
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash
        });

        await newUser.save();
        res.status(201).send("New User Is Created.");
    } catch (e) {
        next(createError(e.status, e.message));
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404, "User not found."))

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return next(createError(404, "Wrong Password"));

        const token = jwt.sign(
            {
            id: user._id,
            isSeller: user.isSeller,
            },
            
            process.env.JWT_KEY
        );
        const {password, ...info} = user._doc;
        res.cookie("accessToken", token, {httpOnly: true}).status(200).json({
            message: "User Logged In Successfully",
            body:info
        })

    } catch (error) {
        next(error);
    }
}

export const logout = (req, res) => {

    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: false, // It is false because I am working on HTTP only (localhost). Set to "TRUE" if working on HTTPS.
    }).status(200).json({message: "It Works on api/user/test"})
}

