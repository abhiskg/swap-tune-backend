import express from "express";
import {
  CreateCategory,
  GetAllCategory,
} from "../controllers/CategoryController";

const router = express.Router();

router.get("/", GetAllCategory);
router.post("/", CreateCategory);

export default router;
