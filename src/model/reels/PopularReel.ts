import {
    ViewEntity,
    Connection,
    ViewColumn
  } from 'typeorm'
import { Like } from '../Models'

@ViewEntity({
    schema : 'EFS',
    name: "VW_POPULAR_REELS",
    expression: (connection: Connection) => connection.createQueryBuilder()
            .select("r.reelId", "reelId")        
            .addSelect("r.titulo", "titulo")
            .addSelect("g.grupoId", "grupoId")
            .addSelect("COUNT(1)", "cantidadLikes")
            .from(Like, "l")
            .innerJoin('l.reel', 'r')
            .innerJoin('r.seccion', 's')
            .innerJoin('s.grupo', 'g')
            .where("l.like = 1")
            .groupBy('r.reelId')
            .orderBy("cantidadLikes", "DESC")
            
})
export class PopularReel {

    @ViewColumn()
    reelId!: number

    @ViewColumn()
    grupoId!: number

    @ViewColumn()
    titulo!: string

    @ViewColumn()
    cantidadLikes!: number
 
}
