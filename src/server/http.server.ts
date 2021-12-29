import * as express from 'express';
import { Controller } from './controller';
import { IConfig } from 'config';
import { pino } from 'pino';
import HttpOptions from './http.server.options';

export default class HttpServer {
  #app: express.Application;
  #log: pino.Logger;
  #config: IConfig;
  #options: HttpOptions;

  constructor(options: HttpOptions, logger: pino.Logger, config: IConfig) {
    this.#config = config;
    this.#log = logger;
    this.#options = options;
    this.#app = this.#options.build();
  }

  initializeControllers = (controllers: Controller[]): void => {
    controllers.forEach((controller) => {
      this.#app.use('/', controller.router);
    });
    this.#log.info('Initialized controllers', HttpServer.name);
  }

  start = (): void => {
    this.#log.info('Starting server...', HttpServer.name);
    this.#app.listen(this.#config.get('port'), '0.0.0.0', () => {
      this.#log.info(`${this.#config.get('name')} http server is listening on ${this.#config.get('port')}`, HttpServer.name);
    });
  }
}

