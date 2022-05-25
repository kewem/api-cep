import express from "express";
import cors from "cors";
import "dotenv/config";
import UsersRouter from "./routes/users.routes";
import CepRouter from "./routes/cep.routes";

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }

  private router() {
    this.server.use("/v1/users", UsersRouter);
    this.server.use("/v1/cep", CepRouter);
    this.server.use((req, res, next) => {
      res.status(404);
      res.send({
        error: "not found",
      });
    });
  }
}

export default new App().server;
