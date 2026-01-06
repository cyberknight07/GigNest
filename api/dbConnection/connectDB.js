import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo db connected.");
  } catch (e) {
    console.log(e.message);
  }
};

export default connectDB;
