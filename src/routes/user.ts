import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetUserByRole,
  UpdateUserRole,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();

router.get("/", VerifyJwt, VerifyAdmin, GetUserByRole);
router.post("/", CheckExistingUser, CreateNewUser);
router.patch("/:id", VerifyJwt, VerifyAdmin, UpdateUserRole);
router.delete("/:id", VerifyJwt, VerifyAdmin, DeleteUser);

export default router;
