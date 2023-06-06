import { inject, injectable } from "tsyringe";
import ProductRepository from "../repositories/ProductRepository";

@injectable()
class ProductsService {
  constructor(
    @inject("ProductRepository")
    private repository: ProductRepository
  ) {}

  public create(data: any) {
    const product = this.repository.insert(data);

    return product;
  }
  public async list() {
    const products = await this.repository.list();
    return products;
  }
  public findOne(id: string) {
    const product = this.repository.findById(id);
    return product;
  }
}

export default ProductsService;
