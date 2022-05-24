import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export function JWTCheck(req: Request, res: Response, next: NextFunction) {
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

  verify(token, `${process.env.JWT_SECRET}`, { complete: true }, async (error, data) => {
    if (error) {
      return res.status(400).json({ error: error.message });
    } else {
      const payload = data.payload as JwtPayload;
      console.log(`UserId: ${payload.userId} make an search`);
      return next();
    }
  });
}
