import * as express from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { Service } from "typedi";
import { serverPort, sourcepath } from "../config";


@Service()
export class Server {
  private app!: express.Application;

  init(): void {
    this.app = createExpressServer({
      routePrefix: "api",
      cors:true,
      defaultErrorHandler: false,
      controllers: [`${sourcepath}/controllers/**/*{.js,.ts}`],
      validation: {
        skipMissingProperties: true,
        validationError: { target: false, value: false },
      },
    });
    console.log("Server Initialized");
  }
  start(): void {
    this.app.listen(serverPort.port, () => {
      console.log("Server running on port " + serverPort.port);
    });
  }
}
