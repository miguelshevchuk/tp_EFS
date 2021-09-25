import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import sesionService from '../../service/SesionService';
import usuarioService from '../../service/UsuarioService';
import { ICRUDController } from '../ICRUDController';

class SesionController implements ICRUDController{
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    getOne: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;


    public async create (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            let login = req.body;
            let jwt = await sesionService.login(login)
            return res.status(200).send(jwt)   
        } catch (e) {
          next(e)
        }
    }

}

export const sesionController = new SesionController();