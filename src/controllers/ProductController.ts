import { Request, Response } from "express";
import Product from "../models/Product";

export const GetProductsByCategory = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ categoryId: req.params.id });

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetProductsBySellerId = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ sellerId: req.params.id });

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const CreateNewProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.create(req.body);

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
