import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { name, email } = req.body;

    try {
      const user = await this.createUserUseCase.execute({ name, email });
      return res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error || "Unexpected error" });
    }
  }
}
