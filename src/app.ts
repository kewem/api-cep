import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
    this.database();
  }

  private database(): void {
    mongoose.connect(this.uri!);
  }

  private uri = process.env.MONGODB_CONNECTION_URL;

  private middleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }

  private router() {
    this.server.use((req, res, next) => {
      res.status(404);
      res.send({
        error: "not found",
      });
    });
  }
}

export default new App().server;
