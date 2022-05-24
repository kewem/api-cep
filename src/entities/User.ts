import { randomUUID } from "crypto";
import { sign } from "jsonwebtoken";

export class User {
  public readonly id: string;
  public readonly jwt: string;
  public name: string;
  public email: string;

  constructor(props: Omit<User, "id" | "jwt">, id?: string, jwt?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
    if (!jwt) {
      this.jwt = sign({ userId: this.id }, "secret_private_key");
    }
  }
}
