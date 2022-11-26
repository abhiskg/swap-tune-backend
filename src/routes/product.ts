import express from "express";
import {
  CreateNewProduct,
  GetProductsByCategory,
  GetProductsBySellerId,
} from "../controllers/ProductController";
import ValidateId from "../middlewares/ValidateId";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifySeller from "../middlewares/VerifySeller";

const router = express.Router();

router.get("/:id", ValidateId, GetProductsByCategory);
router.get("/:id", ValidateId, VerifyJwt, VerifySeller, GetProductsBySellerId);
router.post("/", VerifyJwt, VerifySeller, CreateNewProduct);

export default router;
