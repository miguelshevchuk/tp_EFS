import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import usuarioService from '../../service/UsuarioService';
import { ICRUDController } from '../ICRUDController';

class UsuarioController implements ICRUDController{
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    create: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;


    public async getOne (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            let usuario = await usuarioService.getUsuarioBy(req.params.id)
            return res.status(200).send(usuario)   
        } catch (e) {
          next(e)
        }
    }

}

export const usuarioController = new UsuarioController();