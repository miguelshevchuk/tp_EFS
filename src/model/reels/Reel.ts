import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Clasificacion } from './Clasificacion'
import { Seccion } from './Seccion'

@Entity({
    name : 'REELS'
})
export class Reel {

    @PrimaryGeneratedColumn({name: 'reel_id'})
    reelId!: number

    @Column({
        name: 'titulo'
    })
    titulo!: string

    @Column({
        name: 'url'
    })
    url!: string

    @Column({
        name: 'imagen'
    })
    imagen!: string

    @Column({
        name: 'duracion'
    })
    duracion!: string
  
    @Column({
        name: 'seccion_id'
    })
    @ManyToOne(() => Seccion)
    @JoinColumn({name: 'seccion_id'})
    seccion!: Seccion
 
    @Column({
        name: 'clasificacion_id'
    })
    @ManyToOne(() => Clasificacion)
    @JoinColumn({name: 'clasificacion_id'})
    clasificacion!: Clasificacion

}
