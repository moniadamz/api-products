"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productController_1 = require("../controllers/productController");
const auth_1 = require("../middlewares/auth");
class Routes {
    constructor() {
        this.productController = new productController_1.ProductController();
    }
    routes(app) {
        app.get("/products", this.productController.getProducts);
        app.post("/products", auth_1.default.authenticate, this.productController.addNewProduct);
        app.get("/products/:productId", this.productController.getProductById);
        app.put("/products/:productId", auth_1.default.authenticate, this.productController.updateProduct);
        app.delete("/products/:productId", auth_1.default.authenticate, this.productController.deleteProduct);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=productRoute.js.map