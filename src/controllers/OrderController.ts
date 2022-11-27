import { Request, Response } from "express";
import Order from "../models/Order";

export const CreateNewOrder = async (req: Request, res: Response) => {
  if (req.userRole !== "buyer") {
    return res
      .status(403)
      .json({ success: false, message: "Only a buyer can place a order" });
  }
  if (req.body.orderStatus && req.body.orderStatus !== "unpaid") {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden Access" });
  }
  try {
    const products = await Order.create(req.body);

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ userEmail: req.query.email });

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
