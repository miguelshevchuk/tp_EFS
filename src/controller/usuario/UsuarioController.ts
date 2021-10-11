import express from 'express'
import usuarioService from '../../service/usuario/UsuarioService';
import { ICRUDController } from '../ICRUDController';

class UsuarioController implements ICRUDController{
    getAll: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    update: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    delete: (req: express.Request, res: express.Response, next: express.NextFunction) => any;


    public async getOne (req: express.Request, res: express.Response, next: express.NextFunction) {   
        try {
            let usuario = await usuarioService.getUsuarioBy(req.params.id)
            return res.status(200).send(usuario)   
        } catch (e) {
          next(e)
        }
    }

    public async create(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            await usuarioService.create(req.body);
            return res.status(200).send()   
        } catch (e) {
          next(e)
        }
    }

    public async cambiarPerfil(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const userId = (req as any).user.usuarioId
            await usuarioService.cambiarPerfil(userId, parseInt(req.params.perfilId));
            return res.status(200).send()   
        } catch (e) {
          next(e)
        }
    }

}

export const usuarioController = new UsuarioController();