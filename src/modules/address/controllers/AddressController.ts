import { Request, Response } from "express";
import { container, delay, inject, singleton } from "tsyringe";
import AddressService from "../services/AddressService";

@singleton()
class AddressController {
  constructor(
    @inject(delay(() => AddressService))
    private readonly addressService: AddressService
  ) {}

  public create(req: Request, res: Response): Response {
    const address = this.addressService.create(req.body);

    return res.json(address);
  }

  public async list(req: Request, res: Response) {
    const address = await this.addressService.list();

    return res.json(address);
  }

  public show(req: Request, res: Response) {
    const { id } = req.params;
    const address = this.addressService.findOne(id as string);
    return res.json(address);
  }
}

export default container.resolve(AddressController);
