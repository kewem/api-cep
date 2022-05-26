import { NextFunction, Request, Response, Router } from "express";
import { checkSchema, validationResult } from "express-validator";
import { searchCepController } from "../useCases/SearchCep";
import { JWTCheck } from "../middleware/auth";

const router = Router();

router.post(
  "/",
  JWTCheck,
  checkSchema({ cep: { isString: true, notEmpty: true } }),
  async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    return await searchCepController.handle(request, response, next);
  }
);

export default router;
