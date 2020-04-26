"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("mongoose-paginate-v2", () => jest.fn());
const productController_1 = require("./productController");
const productModel_1 = require("../models/productModel");
describe("Product Controller", () => {
    let req = {};
    const res = {
        send: jest.fn(),
        json: jest.fn(),
        status: jest.fn().mockResolvedValue({
            send: jest.fn().mockRejectedValue('')
        })
    };
    beforeAll(() => {
        req = {};
        productModel_1.default.paginate = jest.fn().mockResolvedValue({ _id: "123" });
        productModel_1.default.save = jest.fn().mockResolvedValue({ _id: "123" });
        productModel_1.default.findById = jest.fn().mockResolvedValue({ _id: "123" });
        productModel_1.default.findOneAndUpdate = jest.fn().mockResolvedValue({ _id: "123" });
    });
    describe("getProducts", () => {
        test("product must return successfully", () => __awaiter(void 0, void 0, void 0, function* () {
            req.query = { offset: 0, limit: 1 };
            const productController = new productController_1.ProductController();
            yield productController.getProducts(req, res);
            expect(res.json).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({ _id: "123" });
            expect(productModel_1.default.paginate).toHaveBeenCalled();
        }));
    });
    describe("getProductById", () => {
        test("product must return successfully", () => __awaiter(void 0, void 0, void 0, function* () {
            req.params = { productId: "123" };
            const productController = new productController_1.ProductController();
            yield productController.getProductById(req, res);
            expect(res.json).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({ _id: "123" });
            expect(productModel_1.default.findById).toHaveBeenCalledWith("123");
        }));
    });
    describe("updateProduct", () => {
        test("product must return successfully", () => __awaiter(void 0, void 0, void 0, function* () {
            req.params = { productId: "123" };
            req.body = { name: "abc" };
            const productController = new productController_1.ProductController();
            yield productController.updateProduct(req, res);
            expect(res.json).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({ _id: "123" });
            expect(productModel_1.default.findOneAndUpdate).toHaveBeenCalledWith({ _id: "123" }, { name: "abc" }, { new: true });
        }));
    });
});
//# sourceMappingURL=productController.test.js.map