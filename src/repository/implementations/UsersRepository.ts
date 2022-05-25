import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => {
      return user.email === email;
    });

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByToken(token: string): Promise<User> {
    const user = this.users.find((user) => {
      return user.jwt === token;
    });

    return user;
  }
}

export const usersRepository = new UsersRepository();
