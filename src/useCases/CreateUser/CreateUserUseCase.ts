import { User } from "../../entities/User";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserDTO) {
    try {
      const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

      if (userAlreadyExists) {
        return Promise.reject("user already exists");
      }

      const user = new User(data);

      await this.usersRepository.save(user);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
