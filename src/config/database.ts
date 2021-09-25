import { ConnectionOptions } from 'typeorm'
import * as Models from '../model/Models'

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.BD_SEMINARIO_HOST || '192.168.230.128',
  port: Number(process.env.BD_SEMINARIO_PORT) || 3306,
  username: process.env.BD_SEMINARIO_USER || 'root',
  password: process.env.BD_SEMINARIO_PASSWORD || 'admin',
  database: process.env.BD_SEMINARIO_DB || 'EFS',
  entities: Object.values(Models),
  synchronize: true,
  logger:'debug'

}

export default config
