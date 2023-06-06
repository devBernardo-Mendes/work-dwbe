import { Router } from "express";
import productController from "../controllers/ProductController";

const productsRouter = Router();

productsRouter.post(
  "/create",
  productController.create.bind(productController)
);
productsRouter.get("/list", productController.list.bind(productController));
productsRouter.get("/show/:id", productController.show.bind(productController));

export default productsRouter;
