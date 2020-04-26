jest.setTimeout(30000);
import { ProductController } from "./productController";
import Product from "../models/productModel";

describe("Product Controller", () => {
  let req: any = {};
  const res: any = {
    send: jest.fn(),
    json: jest.fn(),
  };
  beforeAll(() => {
    req = {}
    Product.find = jest.fn().mockResolvedValue({ _id: "123" });
    Product.save = jest.fn().mockResolvedValue({ _id: "123" });
    Product.findById = jest.fn().mockResolvedValue({ _id: "123" });
    Product.findOneAndUpdate = jest.fn().mockResolvedValue({ _id: "123" });
    Product.remove = jest.fn()
  });

  describe("getProducts", () => {
    test("product must return successfully", async () => {
      const productController = new ProductController();
      await productController.getProducts(req, res);
      expect(res.json).toHaveBeenCalled()
      expect(res.json).toHaveBeenCalledWith({ _id: '123' })
      expect(Product.find).toHaveBeenCalled();
    });
  });

  describe("addNewProduct", () => {
    test("product must return successfully", async () => {
      req.body = { name: 'abc' }
      const productController = new ProductController();
      await productController.addNewProduct(req, res);
      expect(res.json).toHaveBeenCalled()
    });
  });

  describe("getProductById", () => {
    test("product must return successfully", async () => {
      req.params = { productId: '123' }
      const productController = new ProductController();
      await productController.getProductById(req, res);
      expect(res.json).toHaveBeenCalled()
      expect(res.json).toHaveBeenCalledWith({ _id: '123' })
      expect(Product.findById).toHaveBeenCalledWith('123');
    });
  });

  describe("updateProduct", () => {
    test("product must return successfully", async () => {
      req.params = { productId: '123'}
      req.body = { name: 'abc' }
      const productController = new ProductController();
      await productController.updateProduct(req, res);
      expect(res.json).toHaveBeenCalled()
      expect(res.json).toHaveBeenCalledWith({ _id: '123' })
      expect(Product.findOneAndUpdate).toHaveBeenCalledWith({ _id: '123'}, {name:'abc'});
    });
  });
});
