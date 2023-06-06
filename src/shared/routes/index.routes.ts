import { Router } from "express";
import usersRouter from "../../modules/users/routes/users.routes";
import addressRouter from "../../modules/address/routes/address.routes";
import productsRouter from "../../modules/product/routes/product.routes";
import demandRouter from "../../modules/demand/routes/demand.routes";
import assessmentsRouter from "../../modules/assessment/routes/assessment.routes";
const route = Router();

route.use("/users", usersRouter);
route.use("/address", addressRouter);
route.use("/products", productsRouter);
route.use("/demands", demandRouter);
route.use("/assessments", assessmentsRouter);

export default route;
