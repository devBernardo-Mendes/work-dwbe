import ProductRepository from "../../../modules/product/repositories/ProductRepository";
import { inject, injectable } from "tsyringe";
import DemandRepository from "../repositories/DemandRepository";
import UsersRepository from "../../../modules/users/repositories/UsersRepository";

@injectable()
class DemandService {
  constructor(
    @inject("DemandRepository")
    private repository: DemandRepository,
    @inject("ProductRepository")
    private productRepository: ProductRepository,
    @inject("UsersRepository")
    private userRepository: UsersRepository
  ) {}

  public create(data: any) {
    const demand = this.repository.insert(data);

    return demand;
  }
  public async list() {
    const demands = await this.repository.list();
    return demands;
  }
  public findOne(id: string) {
    let demand = this.repository.findById(id);
    demand = {
      ...demand,
      produto: this.productRepository.findById(demand.produto_id),
      usuario: this.userRepository.findById(demand.usuario_id),
    };

    delete demand.produto_id;
    delete demand.usuario_id;
    return demand;
  }
}

export default DemandService;
