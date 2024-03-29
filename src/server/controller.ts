import * as express from 'express';

export interface Controller {
   router: express.Router;
   path: string;

   initializeRoutes(): void;
}
