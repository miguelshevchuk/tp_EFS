import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
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
        name: 'nombre_archivo'
    })
    nombreArchivo!: string

    @Column({
        name: 'ubicacion'
    })
    ubicacion!: string
  
    @Column({
        name: 'seccion_id'
    })
    @ManyToOne(() => Seccion)
    @JoinColumn({name: 'seccion_id'})
    seccion!: Seccion
 
}
