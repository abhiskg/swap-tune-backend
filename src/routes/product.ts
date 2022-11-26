import express from "express";
import {
  CreateNewProduct,
  GetProductsByCategory,
  GetProductsBySellerEmail,
  ToggleAdvertiseMode,
} from "../controllers/ProductController";
import ValidateId from "../middlewares/ValidateId";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifySeller from "../middlewares/VerifySeller";

const router = express.Router();

router.get("/", VerifyJwt, VerifySeller, GetProductsBySellerEmail);
router.post("/", VerifyJwt, VerifySeller, CreateNewProduct);

router.get("/:id", ValidateId, GetProductsByCategory);
router.patch("/:id", ValidateId, VerifyJwt, VerifySeller, ToggleAdvertiseMode);

export default router;
