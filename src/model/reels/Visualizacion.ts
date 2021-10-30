import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn
  } from 'typeorm'
import { Usuario } from '../Models';
import { Reel } from './Reel'

@Entity({
    name : 'VISUALIZACIONES'
})
export class Visualizacion {

    @PrimaryGeneratedColumn({name: 'visualizacion_id'})
    visualizacionId!: number
  
    @Column({
        name: 'usuario_id'
    })
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

    @Column({
        name: 'reel_id'
    })
    @ManyToOne(() => Reel)
    @JoinColumn({name: 'reel_id'})
    reel: Reel;

    @Column({
        name: 'fecha'
    })
    fecha!: Date

    constructor(){
        this.fecha = new Date()
    }
}
