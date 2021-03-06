import express from 'express';
import morgan from 'morgan'
import Router from "./api/routes/Router"
import { createConnection } from 'typeorm'
import dbConfig from './config/database'
import { errorHandler } from './api/middleware/errorHandler';
import precioService from './service/simulador/PrecioService';

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(Router)
app.use(errorHandler)

const port = process.env.PORT || 3000
const env = process.env.ENV || "DEV"

let configuracionBD = dbConfig.configProd

if(env === "DEV"){
  configuracionBD = dbConfig.configDev
}

createConnection(configuracionBD)
  .then((_connection) => {
    precioService.actualizarPreciosHistoricos()
    app.listen(port, () => {
      console.log('Escuchando Puerto: ' + port)
    })
  })
  .catch((err) => {
    console.log('Unable to connect to db', err)
    process.exit(1)
  })
