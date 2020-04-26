import { ProductController } from "../controllers/productController"
import _ from '../middlewares/auth'
export class Routes {
  public productController: ProductController = new ProductController()

  public routes(app): void {

    app.get("/products", this.productController.getProducts)

    app.post("/products", _.authenticate, this.productController.addNewProduct)

    app.get("/products/:productId", this.productController.getProductById)

    app.put("/products/:productId", _.authenticate, this.productController.updateProduct)
    
    app.delete("/products/:productId", _.authenticate, this.productController.deleteProduct)
  }
}
