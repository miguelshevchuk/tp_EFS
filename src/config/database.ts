import { ConnectionOptions } from 'typeorm'
import * as Models from '../model/Models'

const configDev: ConnectionOptions = {
  type: 'postgres',
  host: process.env.BD_SEMINARIO_HOST || '192.168.230.128',
  port: Number(process.env.BD_SEMINARIO_PORT) || 5432,
  username: process.env.BD_SEMINARIO_USER || 'postgres',
  password: process.env.BD_SEMINARIO_PASSWORD || 'admin',
  database: process.env.BD_SEMINARIO_DB || 'EFS',
  entities: Object.values(Models),
  synchronize: true,
  logger:'debug'

}

const configProd: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgres://kgxihiewxpehdh:dbd9fa60a80aef22e531a196a6d9f3c27b25d83a96c19a95d1e89939908c54d5@ec2-52-87-107-83.compute-1.amazonaws.com:5432/df81idmi9pesh2',
  entities: Object.values(Models),
  synchronize: true,
  logger:'debug'

}

const dbConfig = {
  configDev : configDev,
  configProd : configProd
}



export default dbConfig
