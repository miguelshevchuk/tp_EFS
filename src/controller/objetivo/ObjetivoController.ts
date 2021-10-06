import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import objetivoService from '../../service/objetivo/ObjetivoService';
import { ICRUDController } from '../ICRUDController';

class ObjetivoController implements ICRUDController{
    getOne: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;

    public async getAll(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            let objetivos = await objetivoService.getAll()
            return res.status(200).send(objetivos)   
        } catch (e) {
          next(e)
        }
    };

    public async create(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            await objetivoService.create(req.body)
            return res.status(201).send()   
        } catch (e) {
          next(e)
        }
    };

    public async createPersonalizado(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            await objetivoService.createPersonalizado(req.body)
            return res.status(201).send()   
        } catch (e) {
          next(e)
        }
    };

}

export const objetivoController = new ObjetivoController();