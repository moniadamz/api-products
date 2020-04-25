jest.setTimeout(30000);
import { ProductController } from "./productController";
import Product from "../models/productModel";
describe("Product Controller", () => {
  const req: any = {};
  const res: any = {
    send: jest.fn(),
    json: jest.fn(),
  };
  beforeAll(() => {
    Product.find = jest.fn().mockResolvedValue({ _id: "123" });
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
});
