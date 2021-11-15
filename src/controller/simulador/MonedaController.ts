import express from 'express'
import precioService from '../../service/simulador/PrecioService';
import { ICRUDController } from '../ICRUDController';

class MonedaController implements ICRUDController{
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    create: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;


    public async getOne (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            let precio = await precioService.getPrecioActual(req.params.moneda)
            return res.status(200).send(precio)   
        } catch (e) {
          next(e)
        }
    }

}

export const monedaController = new MonedaController();