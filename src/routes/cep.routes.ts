import { Router } from "express";
import { searchCepController } from "../useCases/SearchCep";
import { JWTCheck } from "../middleware/auth";

const router = Router();

router.get("/:cep", JWTCheck, async (request, response, next) => {
  return await searchCepController.handle(request, response, next);
});

export default router;
