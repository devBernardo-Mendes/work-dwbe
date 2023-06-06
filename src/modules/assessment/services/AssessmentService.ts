import ProductRepository from "../../../modules/product/repositories/ProductRepository";
import UsersRepository from "../../../modules/users/repositories/UsersRepository";
import { inject, injectable } from "tsyringe";
import AssessmentRepository from "../repositories/AssessmentRepository";
import { AssessmentDto } from "../assessment.dto";
@injectable()
class AssesmentService {
  constructor(
    @inject("AssessmentRepository")
    private repository: AssessmentRepository,
    @inject("UsersRepository")
    private userRepository: UsersRepository,
    @inject("ProductRepository")
    private productRepository: ProductRepository
  ) {}
  public create(data: AssessmentDto) {
    const asessment = this.repository.insert(data);

    return asessment;
  }
  public async list() {
    const asessments = await this.repository.list();
    return this.handleArray(asessments);
  }
  public findOne(id: string) {
    let asessment = this.repository.findById(id);

    asessment = {
      ...asessment,
      usuario: this.userRepository.findById(asessment.usuario_id),
      produto: this.productRepository.findById(asessment.produto_id),
    };

    delete asessment.usuario_id;
    delete asessment.produto_id;

    return asessment;
  }

  protected handleArray(data: any[]) {
    let arr: any[] = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      const user = this.userRepository.findById(element.usuario_id);
      const product = this.productRepository.findById(element.produto_id);

      delete element.usuario_id;
      delete element.produto_id;
      arr.push({
        ...element,
        usuario: user,
        produto: product,
      });
    }

    return arr;
  }
}

export default AssesmentService;
