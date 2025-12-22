import express from 'express'
import { verifyToken } from '../middleware/jwt.js';
import {getAllOrders, createOrder} from "../controllers/order.controller.js"

const router = express.Router();

router.get("/", verifyToken, getAllOrders);
router.post("/:gigId", verifyToken, createOrder);

export default router;