import express from "express";
import {
  CreateNewProduct,
  DeleteProductById,
  GetAdvertisedProducts,
  GetProductsByCategory,
  GetProductsBySellerEmail,
  GetReportedProducts,
  ToggleAdvertiseMode,
  ToggleProductReportOption,
} from "../controllers/ProductController";
import ValidateId from "../middlewares/ValidateId";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifySeller from "../middlewares/VerifySeller";
import VerifyUser from "../middlewares/VerifyUser";

const router = express.Router();

router.get("/", GetAdvertisedProducts);
router.post("/", VerifyJwt, VerifySeller, CreateNewProduct);

router.get("/:category", GetProductsByCategory);
// router.get("/:id", ValidateId, GetProductsByCategory);
router.get("/seller/:email", VerifyJwt, VerifySeller, GetProductsBySellerEmail);
router.patch("/:id", ValidateId, VerifyJwt, VerifySeller, ToggleAdvertiseMode);
router.delete("/:id", ValidateId, VerifyJwt, VerifyUser, DeleteProductById);

router.get("/reports", VerifyJwt, VerifyAdmin, GetReportedProducts);
router.patch("/reports", VerifyJwt, VerifyUser, ToggleProductReportOption);

export default router;
