import AddressRepository from "../repositories/AddressRepository";
import { inject, injectable } from "tsyringe";
import UsersRepository from "../../../modules/users/repositories/UsersRepository";

@injectable()
class AddressService {
  constructor(
    @inject("AddressRepository")
    private repository: AddressRepository,
    @inject("UsersRepository")
    private userRepository: UsersRepository
  ) {}

  public create(data: any) {
    const address = this.repository.insert(data);

    return address;
  }
  public list() {
    const address = this.repository.list();
    return address;
  }
  public findOne(id: string) {
    const address = this.repository.findById(id);
    const user = this.userRepository.findById(address.usuario_id);
    return {
      ...address,
      user: user,
    };
  }
}

export default AddressService;
