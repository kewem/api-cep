import { usersRepository } from "../../repository/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
