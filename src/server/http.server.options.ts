import express, { Application } from 'express';
import expressRequestId from 'express-request-id';
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

  useExpressRequestId = (): void => {
    this.#apiInstance.use(expressRequestId());
  }

  build = (): Application => {
    return this.#apiInstance;
  }
}
