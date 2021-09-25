import express from 'express';
import morgan from 'morgan'
import Router from "./routes/Router"
import { createConnection } from 'typeorm'
import dbConfig from './config/database'

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(Router)

const port = process.env.PORT || 3003


createConnection(dbConfig)
  .then((_connection) => {
    app.listen(port, () => {
      console.log('Escuchando Puerto: ' + port)
    })
  })
  .catch((err) => {
    console.log('Unable to connect to db', err)
    process.exit(1)
  })
