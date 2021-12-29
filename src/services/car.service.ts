import { pino } from 'pino';
import { Car } from '../types/types';

export class CarService {
  #logger: pino.Logger;

  constructor(logger: pino.Logger) {
    this.#logger = logger;
  }

  async getAll(): Promise<Car[]> {
    return Promise.resolve([
      { vin: '12345', brand: 'Audi', model: 'A4' },
      { vin: '65432', brand: 'BMW', model: 'X3' }]);
  }

  async create(car: Car): Promise<Car> {
    this.#logger.info(car);
    return Promise.resolve({ vin: '12345', brand: 'Audi', model: 'A4' });
  }

  async update(car: Car): Promise<boolean> {
    this.#logger.info(car);
    return Promise.resolve(true);
  }

  async delete(vin: string): Promise<number> {
    this.#logger.info({ vin: vin });
    return Promise.resolve(1);
  }
}
