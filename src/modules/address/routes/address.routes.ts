import { Router } from "express";
import addressController from "../controllers/AddressController";

const addressRouter = Router();

addressRouter.post("/create", addressController.create.bind(addressController));
addressRouter.get("/list", addressController.list.bind(addressController));
addressRouter.get("/show/:id", addressController.show.bind(addressController));

export default addressRouter;
