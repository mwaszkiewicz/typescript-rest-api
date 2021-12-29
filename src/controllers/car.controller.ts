import { Request, Response, Router } from 'express';
import { pino } from 'pino';
import HTTPStatus from 'http-status';
import { Controller } from '../server/controller';
import { CarService } from '../services/car.service';
import { Car } from '../types/types';

class CarController implements Controller {
  #logger: pino.Logger;
  #carService: CarService;

  public path = '/api/v1/cars';
  public router = Router();

  constructor(service: CarService, logger: pino.Logger) {
    this.#logger = logger;
    this.#carService = service;
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.getAll);
    this.router.post(this.path, this.create);
    this.router.patch(this.path, this.update);
    this.router.delete(`${this.path}/:vin`, this.delete);
  }

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const cars = await this.#carService.getAll();
    return res.json({ result: cars });
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const body: Car = req.body as Car;

      const result = await this.#carService.create(body);

      return res.status(HTTPStatus.CREATED).send({ message: 'Car created', car: result });
    } catch (error) {
      const errorCode = error instanceof Error ? HTTPStatus.BAD_REQUEST : HTTPStatus.INTERNAL_SERVER_ERROR;
      this.#logger.error(error);
      return res.status(errorCode).json({ error: error instanceof Error ? error.message : 'Unexpected error occurred' });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const body: Car = req.body as Car;

      const result = await this.#carService.update(body);

      return res.send({ message: `Car updated: ${result}` });
    } catch (error) {
      const errorCode = error instanceof Error ? HTTPStatus.BAD_REQUEST : HTTPStatus.INTERNAL_SERVER_ERROR;
      this.#logger.error(error);
      return res.status(errorCode).json({ error: error instanceof Error ? error.message : 'Unexpected error occurred' });
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const params = req.params as { vin: string };

    const result = await this.#carService.delete(params.vin);

    return res.send({ message: `Removed car: ${result}` });
  };
}

export default CarController;
