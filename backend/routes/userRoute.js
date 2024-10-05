import express from "express";
import { loginUser, registerUser, adminLoginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.post("/admin", adminLoginUser);

export default userRouter;