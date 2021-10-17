import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryColumn
  } from 'typeorm'
import { Perfil } from '../Models'

@Entity({
    name : 'GRUPOS'
})
export class Grupo {

    @PrimaryColumn({name: 'grupo_id'})
    grupoId!: number

    @Column({
        name: 'titulo'
    })
    titulo!: string

    @Column({
        name: 'perfil_id'
    })
    @ManyToOne(() => Perfil)
    @JoinColumn({name: 'perfil_id'})
    perfil!: Perfil
 
}
