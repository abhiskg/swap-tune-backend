import express from "express";
import {
  CreateNewProduct,
  DeleteProductById,
  GetAdvertisedProducts,
  GetProductsByCategory,
  GetProductsBySellerEmail,
  ToggleAdvertiseMode,
} from "../controllers/ProductController";
import ValidateId from "../middlewares/ValidateId";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifySeller from "../middlewares/VerifySeller";

const router = express.Router();

router.get("/", GetAdvertisedProducts);
router.post("/", VerifyJwt, VerifySeller, CreateNewProduct);

router.get("/:category", GetProductsByCategory);
router.get("/:email", VerifyJwt, VerifySeller, GetProductsBySellerEmail);
router.get("/:id", ValidateId, GetProductsByCategory);
router.patch("/:id", ValidateId, VerifyJwt, VerifySeller, ToggleAdvertiseMode);
router.delete("/:id", ValidateId, VerifyJwt, VerifySeller, DeleteProductById);

export default router;
