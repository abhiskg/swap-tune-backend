import { Request, Response } from "express";
import Order from "../models/Order";

export const CreateNewOrder = async (req: Request, res: Response) => {
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

    if (!orders) {
      return res.status(404).json({
        success: false,
        error: "Not Order Found",
      });
    }

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
