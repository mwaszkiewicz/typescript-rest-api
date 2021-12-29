/* eslint-disable no-undef */
import HeartbeatController from '../../src/controllers/heartbeat.controller';
import express, { Application } from 'express';
import request from 'supertest';

describe('heartbeat.controller', () => {

  let app: Application;
  beforeAll(async () => {
    const controller = new HeartbeatController();
    app = express();
    app.use('/', controller.router);
  });

  it('check heartbeat method response', async () => {
    const result = await request(app).get('/api/v1/heartbeat');
    expect(result.body).toEqual({ result: 'Cars REST API is running' });
    expect(result.status).toEqual(200);
  });
});
