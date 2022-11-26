import express from "express";
import {
  CreateNewProduct,
  DeleteProductById,
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
router.delete("/:id", ValidateId, VerifyJwt, VerifySeller, DeleteProductById);

export default router;
