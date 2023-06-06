import { Router } from "express";
import demandController from "../controllers/DemandController";

const demandRouter = Router();

demandRouter.post("/create", demandController.create.bind(demandController));
demandRouter.get("/list", demandController.list.bind(demandController));
demandRouter.get("/show/:id", demandController.show.bind(demandController));

export default demandRouter;
