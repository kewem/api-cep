import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";

const router = Router();

router.post("/", async (request, response, next) => {
  if(!request.body.name || !request.body.email) {
    return response.json({error: "You need to provide all required fiels"})
  }
  return await createUserController.handle(request, response, next);
});

export default router;
