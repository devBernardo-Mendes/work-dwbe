import { Router } from "express";
import userController from "../controllers/UsersController";

const usersRouter = Router();

usersRouter.post("/create", userController.create.bind(userController));
usersRouter.get("/list", userController.list.bind(userController));
usersRouter.get("/show/:id", userController.show.bind(userController));

export default usersRouter;
