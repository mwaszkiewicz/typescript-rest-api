import { Request, Response, Router } from 'express';
import { Controller } from '../server/controller';

class HeartbeatController implements Controller {
  public path = '/api/v1/heartbeat';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.heartbeat);
  }

  public heartbeat = (_req: Request, res: Response): Response => {
    return res.json({ result: 'Cars REST API is running' });
  };
}

export default HeartbeatController;
