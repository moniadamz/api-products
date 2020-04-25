import Product from "../models/productModel";
import { Request, Response } from "express";

export class ProductController {
  constructor() {}

  public addNewProduct(req: Request, res: Response) {
    const newProduct = new Product(req.body);

    newProduct.save((err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

    async getProducts(req: Request, res: Response) {
    try {
      const product = await Product.find({})
      res.json(product)
    } catch (error) {
      res.send(error)
    }
  }

  public getProductById(req: Request, res: Response) {
    Product.findById(req.params.productId, (err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

  public updateProduct(req: Request, res: Response) {
    Product.findOneAndUpdate(
      { _id: req.params.productId },
      req.body,
      { new: true },
      (err, product) => {
        if (err) {
          res.send(err);
        }
        res.json(product);
      }
    );
  }

  public deleteProduct(req: Request, res: Response) {
    Product.remove(req.params.productId, (err, product) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Product deleted." });
    });
  }
}
