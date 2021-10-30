import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import reelService from '../../service/reels/ReelService';
import { ICRUDController } from '../ICRUDController';

class ReelController implements ICRUDController{
    create: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;

    public async getOne(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            let reel = await reelService.getReel(userId, parseInt(req.params.reelId));
            return res.status(200).send(reel)   
        } catch (e) {
          next(e)
        }
    }

    public async getGrupos (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            let reels = await reelService.getGrupos();
            return res.status(200).send(reels)   
        } catch (e) {
          next(e)
        }
    }

    public async getMyReelsBySeccion (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            const userId = (req as any).user.usuarioId
            let reels = await reelService.getMyReelsBySeccion(parseInt(req.params.grupoId), userId);
            return res.status(200).send(reels)   
        } catch (e) {
          next(e)
        }
    }

    public async getPopularReels (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            let reels = await reelService.getPopularReels(parseInt(req.params.grupoId));
            return res.status(200).send(reels)   
        } catch (e) {
          next(e)
        }
    }

    public async agregarVisualizacion(req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            const userId = (req as any).user.usuarioId
            await reelService.agregarVisualizacion(userId, parseInt(req.params.reelId));
            return res.status(200).send()   
        } catch (e) {
          next(e)
        }
    }

}

export const reelController = new ReelController();