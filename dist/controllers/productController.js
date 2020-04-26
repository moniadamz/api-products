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
const productModel_1 = require("../models/productModel");
class ProductController {
    constructor() { }
    addNewProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = new productModel_1.default(req.body);
                const product = yield newProduct.save();
                res.json(product);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productModel_1.default.paginate({}, { offset: req.query.offset || 0, limit: req.query.limit || 10 });
                res.json(product);
            }
            catch (error) {
                res.send(error);
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productModel_1.default.findById(req.params.productId);
                res.json(product);
            }
            catch (error) {
                res.status(404).send({ message: 'Product not found.' });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productModel_1.default.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true });
                res.json(product);
            }
            catch (error) {
                res.status(404).send({ message: 'Product not found.' });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productModel_1.default.findOneAndDelete(req.params.productId);
                res.json({ message: "Product deleted." });
            }
            catch (error) {
                res.status(404).send({ message: 'Product not found.' });
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=productController.js.map