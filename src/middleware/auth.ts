import { Request, Response, NextFunction } from "express";
import { usersRepository } from "../repository/implementations/UsersRepository";

export async function JWTCheck(req: Request, res: Response, next: NextFunction) {
  if (req.method === "OPTIONS") {
    return next();
  }

  if (!req.headers.authorization) {
    throw res.status(401).json({ error: "Authentication failed!" });
  }

  const headerAuth = req.headers.authorization!;

  const token = headerAuth.split(" ")[1]; // Authorization: 'Bearer TOKEN'

  if (!token) {
    throw res.status(400).json({ error: "Authentication failed!" });
  }

  const user = await usersRepository.findByToken(token);

  if (!user) {
    return res.status(400).json({ error: "Unregistered token" });
  } else {
    return next();
  }
}
