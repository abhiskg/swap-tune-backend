import express from "express";
import { CreatePaymentIntend } from "../controllers/StripeController";

const router = express.Router();

router.post("/", CreatePaymentIntend);

export default router;
