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
      res.status(400).send(error);
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
      res.status(404).send({ message: 'Product not found.'});
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: req.params.productId },
        req.body, { new: true }
      );
      res.json(product);
    } catch (error) {
      res.status(404).send({ message: 'Product not found.'});
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      await Product.findOneAndDelete(req.params.productId);
      res.json({ message: "Product deleted." });
    } catch (error) {
      res.status(404).send({ message: 'Product not found.'});
    }
  }
}
