import express from "express";
import {
  CreateNewOrder,
  GetOrdersByEmail,
} from "../controllers/OrderController";

const router = express.Router();

router.get("/", GetOrdersByEmail);
router.post("/", CreateNewOrder);

export default router;
