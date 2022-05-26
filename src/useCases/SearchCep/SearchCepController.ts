import { NextFunction, Request, Response } from "express";
import { SearchCepUseCase } from "./SearchCepUseCase";

export class SearchCepController {
  constructor(private searchCepUseCase: SearchCepUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { cep } = req.body;

    const result = await this.searchCepUseCase.execute({ cep }).catch((error) => {
      res.status(400).json({ error: error });
    });

    return res.status(200).json(result);
  }
}
