import { Request, Response } from "express";
import { container, delay, inject, singleton } from "tsyringe";
import DemandService from "../services/DemandService";
@singleton()
export class DemandController {
  constructor(
    @inject(delay(() => DemandService))
    private readonly service: DemandService
  ) {}
  public create(req: Request, res: Response): Response {
    const demand = this.service.create(req.body);

    return res.json(demand);
  }

  public async list(req: Request, res: Response) {
    const demands = await this.service.list();

    return res.json(demands);
  }

  public show(req: Request, res: Response) {
    const { id } = req.params;
    const demands = this.service.findOne(id as string);
    return res.json(demands);
  }
}

export default container.resolve(DemandController);
