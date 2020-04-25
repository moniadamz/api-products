"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productController_1 = require("../controllers/productController");
class Routes {
    constructor() {
        this.productController = new productController_1.ProductController();
    }
    routes(app) {
        app.route("/products").get(this.productController.getProducts);
        app.route("/products").post(this.productController.addNewProduct);
        app.route("/products/:productId").get(this.productController.getProductById);
        app.route("/products/:productId").put(this.productController.updateProduct);
        app.route("/products/:productId").delete(this.productController.deleteProduct);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=productRoute.js.map