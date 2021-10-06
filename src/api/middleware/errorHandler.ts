import express from 'express'
import { EFSError } from '../../error/EFSError'

export const errorHandler = [
  async (
    err,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {

    if(err instanceof EFSError){
      console.log(err)
      res.status(err.status).send(err.mensaje)
    }else{
      res.status(500).send("Ocurrio un error inesperado")
    }    

  },
]