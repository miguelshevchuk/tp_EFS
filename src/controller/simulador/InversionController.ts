import express from 'express'
import inversionService from '../../service/simulador/InversionService';
import precioService from '../../service/simulador/PrecioService';
import { ICRUDController } from '../ICRUDController';

class InversionController implements ICRUDController{
    getOne: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;


    public async getAll (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            const userId = (req as any).user.usuarioId
            let resumen = await inversionService.getResumenUsuario(userId)
            return res.status(200).send(resumen)   
        } catch (e) {
          next(e)
        }
    }

    public async create (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            const userId = (req as any).user.usuarioId
            let response = await inversionService.invertir(userId, req.body)
            return res.status(200).send(response)   
        } catch (e) {
          next(e)
        }
    }

}

export const inversionController = new InversionController();