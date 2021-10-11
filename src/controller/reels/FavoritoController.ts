import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import favoritoService from '../../service/reels/FavoritoService';
import { ICRUDController } from '../ICRUDController';

class FavoritoController implements ICRUDController{
    update: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    getOne: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;

    public async create(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            await favoritoService.save(userId, req.body);
            return res.status(201).send()   
        } catch (e) {
          next(e)
        }
    }


    public async delete(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            await favoritoService.delete(userId, parseInt(req.params.reelId));
            return res.status(200).send()   
        } catch (e) {
          next(e)
        }
    }

}

export const favoritoController = new FavoritoController();