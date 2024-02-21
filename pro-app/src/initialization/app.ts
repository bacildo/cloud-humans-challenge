import "reflect-metadata";
import { Server } from "./index";

export class App {
  private server = new Server();

  async appInitialize(): Promise<Server> {
    this.server.init();
    return this.server;
  }
}
