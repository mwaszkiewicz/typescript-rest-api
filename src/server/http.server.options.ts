import express, { Application } from 'express';
import pino from 'express-pino-logger';

export default class HttpOptions {
  #apiInstance: Application;

  constructor() {
    this.#apiInstance = express();
  }

  useBodyParser = (): void => {
    this.#apiInstance.use(express.urlencoded({ extended: true, limit: '50kb' }));
    this.#apiInstance.use(express.json({ limit: '50kb' }));
  }

  useHttpPino = (): void => {
    this.#apiInstance.use(pino());
  }

  build = (): Application => {
    return this.#apiInstance;
  }
}
