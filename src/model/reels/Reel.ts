import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
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
        name: 'seccion_id'
    })
    @ManyToOne(() => Seccion)
    @JoinColumn({name: 'seccion_id'})
    seccion!: Seccion
 
}
