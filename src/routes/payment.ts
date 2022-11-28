import express from "express";
import { CreateNewPayment } from "../controllers/PaymentController";

const router = express.Router();

router.post("/", CreateNewPayment);

export default router;
