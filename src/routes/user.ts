import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetUserRole,
  GetUsersByRole,
  UpdateUserRole,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import ValidateId from "../middlewares/ValidateId";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifyUser from "../middlewares/VerifyUser";

const router = express.Router();

router.get("/", VerifyJwt, VerifyAdmin, GetUsersByRole);
router.get("/role", VerifyJwt, VerifyUser, GetUserRole);
router.post("/", CheckExistingUser, CreateNewUser);
router.patch("/:id", ValidateId, VerifyJwt, VerifyAdmin, UpdateUserRole);
router.delete("/:id", ValidateId, VerifyJwt, VerifyAdmin, DeleteUser);

export default router;
