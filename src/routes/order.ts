import express from "express";
import {
  CreateNewOrder,
  GetOrderById,
  GetOrdersByEmail,
} from "../controllers/OrderController";
import ValidateId from "../middlewares/ValidateId";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifyUser from "../middlewares/VerifyUser";

const router = express.Router();

router.get("/", VerifyJwt, VerifyUser, GetOrdersByEmail);
router.post("/", VerifyJwt, VerifyUser, CreateNewOrder);

router.get("/:id", ValidateId, VerifyJwt, VerifyUser, GetOrderById);

export default router;
