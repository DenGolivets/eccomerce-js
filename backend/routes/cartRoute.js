import express from "express";
import { addToCart, updateCart, getUserCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartTouter = express.Router();

cartTouter.post("/add", authUser, addToCart);
cartTouter.post("/update", authUser, updateCart);
cartTouter.post("/get", authUser, getUserCart);

export default cartTouter;