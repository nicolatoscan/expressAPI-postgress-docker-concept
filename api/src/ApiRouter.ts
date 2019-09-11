import { Router, Request, Response, NextFunction } from 'express';
import DbService from './DbService'


class ApiRouter {
    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/employees', this.addCall);
    }

    addCall(req: Request, res: Response, next: NextFunction) {
        
        DbService.getPool().query('SELECT * FROM employees', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    }
}

const r = new ApiRouter();
export default r.router;
