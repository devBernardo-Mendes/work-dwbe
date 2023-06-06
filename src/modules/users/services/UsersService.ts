import { inject, injectable } from "tsyringe";
import UsersRepository from "../repositories/UsersRepository";
@injectable()
class UsersService {
  constructor(
    @inject("UsersRepository")
    private repository: UsersRepository
  ) {}
  public create(data: any) {
    const user = this.repository.insert(data);

    return user;
  }
  public async list() {
    const users = await this.repository.list();
    return users;
  }
  public findOne(id: string) {
    const user = this.repository.findById(id);

    if (!user) throw new Error("User not found");

    return user;
  }
}

export default UsersService;
