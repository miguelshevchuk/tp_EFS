import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Reel } from '../Models'

@Entity({
    name : 'ACCIONES_VISUALIZACION'
})
export class AccionVisualizacion {

    @PrimaryGeneratedColumn({name: 'accion_visualizacion_id'})
    accionVisualizacionId!: number

    @Column({
        name: 'accion'
    })
    accion!: string

    @Column({
        name: 'reel_id'
    })
    @ManyToOne(() => Reel)
    @JoinColumn({name: 'reel_id'})
    reel: Reel;


}
