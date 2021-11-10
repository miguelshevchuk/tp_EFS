import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import accionService from '../../service/acciones/AccionService';
import { ICRUDController } from '../ICRUDController';

class AccionController implements ICRUDController{
    getAll: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    create: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;

    public async getOne(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            let accion = await accionService.getAccion(req.params.accion, userId)
            return res.status(200).send(accion)   
        } catch (e) {
          next(e)
        }
    };

}

export const accionController = new AccionController();