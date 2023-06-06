import { Request, Response } from "express";
import { container, delay, inject, singleton } from "tsyringe";
import ProductService from "../services/ProductService";
@singleton()
class ProductController {
  constructor(
    @inject(delay(() => ProductService))
    private readonly service: ProductService
  ) {}

  public create(req: Request, res: Response): Response {
    const product = this.service.create(req.body);

    return res.json(product);
  }
  public async list(req: Request, res: Response) {
    const products = await this.service.list();

    return res.json(products);
  }

  public show(req: Request, res: Response) {
    const { id } = req.params;
    const products = this.service.findOne(id as string);
    return res.json(products);
  }
}

export default container.resolve(ProductController);
