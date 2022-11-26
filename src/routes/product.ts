import express from "express";
import {
  CreateNewProduct,
  GetProductsByCategory,
} from "../controllers/ProductController";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifySeller from "../middlewares/VerifySeller";

const router = express.Router();

router.get("/", GetProductsByCategory);
router.post("/", VerifyJwt, VerifySeller, CreateNewProduct);

export default router;
