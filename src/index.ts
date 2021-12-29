import config from 'config';
import { pino } from 'pino';
import CarController from './controllers/car.controller';
import HeartbeatController from './controllers/heartbeat.controller';
import HttpServer from './server/http.server';
import HttpOptions from './server/http.server.options';
import { CarService } from './services/car.service';

const logger = pino();

const options = new HttpOptions();

options.useBodyParser();
options.useExpressRequestId();
options.useHttpPino();

const carService = new CarService(logger);

const controllersDefinition = [new CarController(carService, logger), new HeartbeatController()];

const server = new HttpServer(options, logger, config);

server.initializeControllers(controllersDefinition);

server.start();
