import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import reelService from '../../service/reels/ReelService';
import usuarioService from '../../service/usuario/UsuarioService';
import { ICRUDController } from '../ICRUDController';

class ReelController implements ICRUDController{
    getOne: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    create: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;


    public async getMyReels (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            const userId = (req as any).user.usuarioId
            let reels = await reelService.getReelsByUser(userId);
            return res.status(200).send(reels)   
        } catch (e) {
          next(e)
        }
    }

    public async getMyReelsBySeccion (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            const userId = (req as any).user.usuarioId
            let reels = await reelService.getMyReelsBySeccion(userId, parseInt(req.params.seccionId));
            return res.status(200).send(reels)   
        } catch (e) {
          next(e)
        }
    }

}

export const reelController = new ReelController();