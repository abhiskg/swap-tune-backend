import { Request, Response } from "express";
import User from "../models/User";
import { AssignJwt } from "../services/AssignJwt";

export const CreateNewUser = async (req: Request, res: Response) => {
  const role = req.body.role;

  if (role === "admin") {
    return res.status(404).json({ success: false, error: "Forbidden" });
  }

  try {
    const newUser = await User.create(req.body);
    const token = await AssignJwt(newUser.email);
    res.status(200).json({ success: true, data: newUser, token });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetUserByRole = async (req: Request, res: Response) => {
  try {
    const user = await User.find({ role: req.query.role });
    console.log(req.headers.authorization);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
      });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const UpdateUserRole = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    user.role = "admin";
    await user.save();

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
