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
jest.setTimeout(30000);
const productController_1 = require("./productController");
const productModel_1 = require("../models/productModel");
describe("Product Controller", () => {
    const req = {};
    const res = {
        send: jest.fn(),
        json: jest.fn(),
    };
    beforeAll(() => {
        productModel_1.default.find = jest.fn().mockResolvedValue({ _id: "123" });
    });
    describe("getProducts", () => {
        test("product must return successfully", () => __awaiter(void 0, void 0, void 0, function* () {
            const productController = new productController_1.ProductController();
            const product = yield productController.getProducts(req, res);
            expect(res.json).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({ _id: '123' });
            expect(productModel_1.default.find).toHaveBeenCalled();
        }));
    });
});
//# sourceMappingURL=productController.test.js.map