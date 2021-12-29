/* eslint-disable no-undef */
import express, { Application } from 'express';
import request from 'supertest';
import { pino } from 'pino';
import { CarService } from '../../src/services/car.service';
import CarController from '../../src/controllers/car.controller';

describe('car.controller', () => {
  let service: CarService;
  let app: Application;

  beforeAll(async () => {
    const logger = pino();
    service = new CarService(logger);

    const controller = new CarController(service, logger);
    app = express();
    app.use(express.json());
    app.use('/', controller.router);
  });

  it('create car endpoint', async () => {
    const result = await request(app).post('/api/v1/cars').send({ vin: '12345', brand: 'Audi', model: 'A4' });

    expect(result.body).toMatchSnapshot();
    expect(result.status).toEqual(201);
  });

  it('update car endpoint', async () => {
    const result = await request(app).patch('/api/v1/cars').send({ vin: '12345', brand: 'Audi', model: 'A4' });

    expect(result.body).toMatchSnapshot();
    expect(result.status).toEqual(200);
  });

  it('get all cars endpoint', async () => {
    const result = await request(app).get('/api/v1/cars');

    expect(result.body).toMatchSnapshot();
    expect(result.status).toEqual(200);
  });

  it('delete car endpoint', async () => {
    const result = await request(app).delete('/api/v1/cars/12345');

    expect(result.body).toMatchSnapshot();
    expect(result.status).toEqual(200);
  });

});
