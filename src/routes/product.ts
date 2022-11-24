import express from "express";
import {
  CreateNewProduct,
  GetProductsByCategory,
} from "../controllers/ProductController";

const router = express.Router();

router.get("/", GetProductsByCategory);
router.post("/", CreateNewProduct);

export default router;
