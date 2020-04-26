jest.mock("mongoose-paginate-v2", () => jest.fn());

import { ProductController } from "./productController";
import Product from "../models/productModel";
describe("Product Controller", () => {
  let req: any = {};
  const res: any = {
    send: jest.fn(),
    json: jest.fn(),
    status: jest.fn().mockResolvedValue({
      send: jest.fn().mockRejectedValue('')
    })
  };
  beforeAll(() => {
    req = {};
    Product.paginate = jest.fn().mockResolvedValue({ _id: "123" });
    Product.save = jest.fn().mockResolvedValue({ _id: "123" });
    Product.findById = jest.fn().mockResolvedValue({ _id: "123" });
    Product.findOneAndUpdate = jest.fn().mockResolvedValue({ _id: "123" });
  });

  describe("getProducts", () => {
    test("product must return successfully", async () => {
      req.query = { offset: 0, limit: 1 };
      const productController = new ProductController();
      await productController.getProducts(req, res);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ _id: "123" });
      expect(Product.paginate).toHaveBeenCalled();
    });
  });

  describe("getProductById", () => {
    test("product must return successfully", async () => {
      req.params = { productId: "123" };
      const productController = new ProductController();
      await productController.getProductById(req, res);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ _id: "123" });
      expect(Product.findById).toHaveBeenCalledWith("123");
    });
  });

  describe("updateProduct", () => {
    test("product must return successfully", async () => {
      req.params = { productId: "123" };
      req.body = { name: "abc" };
      const productController = new ProductController();
      await productController.updateProduct(req, res);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ _id: "123" });
      expect(Product.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: "123" },
        { name: "abc" },
        { new: true }
      );
    });
  });
});
