import { ProductController } from "../controllers/productController"

export class Routes {
  public productController: ProductController = new ProductController()

  public routes(app): void {

    app.route("/products").get(this.productController.getProducts)

    app.route("/products").post(this.productController.addNewProduct)

    app.route("/products/:productId").get(this.productController.getProductById)

    app.route("/products/:productId").put(this.productController.updateProduct)
    
    app.route("/products/:productId").delete(this.productController.deleteProduct)
  }
}
