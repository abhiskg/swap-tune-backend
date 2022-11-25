import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetUserByRole,
  UpdateUserRole,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";

const router = express.Router();

router.get("/", GetUserByRole);
router.post("/", CheckExistingUser, CreateNewUser);
router.patch("/:id", UpdateUserRole);
router.delete("/:id", DeleteUser);

export default router;
