import express from "express";
import {
  CreateNewUser,
  GetUserByRole,
  UpdateUserRole,
} from "../controllers/UserController";

const router = express.Router();

router.get("/", GetUserByRole);
router.post("/", CreateNewUser);
router.patch("/:id", UpdateUserRole);

export default router;
