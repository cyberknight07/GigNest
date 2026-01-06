import exress from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = exress.Router();

router.get("/single/:id", verifyToken, getUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;