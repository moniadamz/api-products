import Product from "../models/productModel";
import { Request, Response } from "express";

export class ProductController {
  constructor() {}

  async addNewProduct(req: Request, res: Response) {
    try {
      const newProduct = new Product(req.body);

      const product = await newProduct.save();
      res.json(product);
    } catch (error) {
      res.send(error);
    }
  }

  async getProducts(req: Request, res: Response) {
    try {
      const product = await Product.paginate({}, { offset: req.query.offset || 0, limit: req.query.limit || 10 });
      res.json(product);
    } catch (error) {
      res.send(error);
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = await Product.findById(req.params.productId);
      res.json(product);
    } catch (error) {
      res.send(error);
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: req.params.productId },
        req.body
      );
      res.json(product);
    } catch (error) {
      res.send(error);
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      await Product.remove(req.params.productId);
      res.json({ message: "Product deleted." });
    } catch (error) {
      res.send(error);
    }
  }
}
