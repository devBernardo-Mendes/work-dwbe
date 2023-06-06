import UsersRepository from "../../modules/users/repositories/UsersRepository";
import { container } from "tsyringe";
import AddressRepository from "../../modules/address/repositories/AddressRepository";
import ProductRepository from "../../modules/product/repositories/ProductRepository";
import DemandRepository from "../../modules/demand/repositories/DemandRepository";
import AssessmentRepository from "../../modules/assessment/repositories/AssessmentRepository";

container.registerSingleton<UsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<AddressRepository>(
  "AddressRepository",
  AddressRepository
);

container.registerSingleton<ProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<DemandRepository>(
  "DemandRepository",
  DemandRepository
);

container.registerSingleton<AssessmentRepository>(
  "AssessmentRepository",
  AssessmentRepository
);
