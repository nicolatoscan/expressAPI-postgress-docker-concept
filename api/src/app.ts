import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import ApiRouter from './ApiRouter';



class App {

  public app: express.Application;

  constructor() {

    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true, }));

    this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).send("Welcome 2")
    });

    this.app.use('/api', ApiRouter);

  }

}

export default new App().app;
