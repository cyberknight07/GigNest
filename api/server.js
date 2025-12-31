import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbConnection/connectDB.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import gigRouter from "./routes/gig.route.js";
import reviewRouter from "./routes/review.route.js";
import orderRouter from "./routes/order.route.js";
import messageRouter from "./routes/message.route.js";
import conversationRouter from "./routes/conversation.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";



const app = express();
app.use(cors({origin:"http://localhost:5173", credentials: true},))
app.use(express.json());
app.use(cookieParser());
dotenv.config();

// Routing
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/orders", orderRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);


// Error Middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong.";

    res.status(errorStatus).json({error: errorMessage});
})

app.get('/', (req, res) => {res.json({message: "It is working"})});

// Listening on port 3000
app.listen(3000, async (req, res) => {
    console.log("Server is running on http://localhost:3000/");
    await connectDB();
})