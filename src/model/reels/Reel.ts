import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryColumn
  } from 'typeorm'
import { Perfil } from '../Models'
import { Seccion } from './Seccion'

@Entity({
    schema : 'efs',
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

    @Column({
        name: 'perfil_id'
    })
    @ManyToOne(() => Perfil)
    @JoinColumn({name: 'perfil_id'})
    perfilRecomendado!: Perfil
    
 
}
