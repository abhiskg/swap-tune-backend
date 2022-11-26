import express from "express";
import {
  CreateCategory,
  GetAllCategory,
} from "../controllers/CategoryController";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();

router.get("/", GetAllCategory);
router.post("/", VerifyJwt, VerifyAdmin, CreateCategory);

export default router;
