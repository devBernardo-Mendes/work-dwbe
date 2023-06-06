import { Request, Response } from "express";
import { container, delay, inject, singleton } from "tsyringe";
import AssessmentService from "../services/AssessmentService";

@singleton()
class AssessmentController {
  constructor(
    @inject(delay(() => AssessmentService))
    private readonly service: AssessmentService
  ) {}
  public create(req: Request, res: Response): Response {
    const assessment = this.service.create(req.body);

    return res.json(assessment);
  }

  public async list(req: Request, res: Response) {
    const assessments = await this.service.list();

    return res.json(assessments);
  }

  public show(req: Request, res: Response) {
    const { id } = req.params;
    const assessments = this.service.findOne(id as string);
    return res.json(assessments);
  }
}

export default container.resolve(AssessmentController);
