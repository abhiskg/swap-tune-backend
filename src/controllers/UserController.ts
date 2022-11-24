import { Request, Response } from "express";
import User from "../models/User";

export const CreateNewUser = async (req: Request, res: Response) => {
  const role = req.body.role;

  if (role === "admin") {
    return res.status(404).json({ success: false, error: "Forbidden" });
  }

  try {
    const newUser = await User.create(req.body);
    res.status(200).json({ success: true, data: newUser });
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

// export const UpdateUserRole = async (req: Request, res: Response) => {
//   try {
//     const user = await User.find({ role: req.query.role });
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: "Not Found",
//       });
//     }
//     res.status(200).json({ success: true, data: user });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error: (error as Error).message,
//     });
//   }
// };
