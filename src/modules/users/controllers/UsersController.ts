import { Request, Response } from "express";
import { container, delay, inject, singleton } from "tsyringe";
import UsersService from "../services/UsersService";

@singleton()
export class UsersController {
  constructor(
    @inject(delay(() => UsersService))
    private readonly service: UsersService
  ) {}
  public create(req: Request, res: Response): Response {
    const user = this.service.create(req.body);

    return res.json(user);
  }
  public async list(req: Request, res: Response) {
    const users = await this.service.list();

    return res.json(users);
  }

  public show(req: Request, res: Response) {
    const { id } = req.params;
    const user = this.service.findOne(id as string);

    return res.json(user);
  }
}

export default container.resolve(UsersController);
