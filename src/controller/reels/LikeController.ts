import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import likeService from '../../service/reels/LikeService';
import reelService from '../../service/reels/ReelService';
import usuarioService from '../../service/usuario/UsuarioService';
import { ICRUDController } from '../ICRUDController';

class LikeController implements ICRUDController{
    getOne: (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => any;
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;

    public async update(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            await likeService.update(userId, req.body);
            return res.status(200).send()   
        } catch (e) {
          next(e)
        }
    }

    public async create(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            await likeService.create(userId, req.body);
            return res.status(200).send()   
        } catch (e) {
          next(e)
        }
    }


    public async delete(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            await likeService.delete(userId, parseInt(req.params.reelId));
            return res.status(200).send()   
        } catch (e) {
          next(e)
        }
    }

}

export const likeController = new LikeController();