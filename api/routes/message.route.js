import { Router } from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createMessage,
  getMessages,
} from "../controllers/messages.controller.js";

const router = Router();

router.post("/createMessage", verifyToken, createMessage);
router.get("/:conversationId", verifyToken, getMessages);

export default router;
