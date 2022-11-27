import express from "express";
import {
  CreateNewOrder,
  GetOrdersByEmail,
} from "../controllers/OrderController";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifyUser from "../middlewares/VerifyUser";

const router = express.Router();

router.get("/", VerifyJwt, VerifyUser, GetOrdersByEmail);
router.post("/",VerifyJwt,VerifyUser, CreateNewOrder);

export default router;
