import { Router } from "express";
import assesmentsController from "../controllers/AssessmentController";

const assesmentsRouter = Router();

assesmentsRouter.post(
  "/create",
  assesmentsController.create.bind(assesmentsController)
);
assesmentsRouter.get(
  "/list",
  assesmentsController.list.bind(assesmentsController)
);
assesmentsRouter.get(
  "/show/:id",
  assesmentsController.show.bind(assesmentsController)
);

export default assesmentsRouter;
