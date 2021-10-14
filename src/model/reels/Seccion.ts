import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryColumn,
    OneToMany
  } from 'typeorm'
import { Grupo } from './Grupo';
import { Reel } from './Reel'

@Entity({
    schema : 'efs',
    name : 'SECCIONES'
})
export class Seccion {

    @PrimaryColumn({name: 'seccion_id'})
    seccionId!: number

    @Column({
        name: 'titulo'
    })
    titulo!: string

    @OneToMany(() => Reel, reel => reel.seccion)
    reels!: Reel[];  
  
    @Column({
        name: 'grupo_id'
    })
    @ManyToOne(() => Grupo)
    @JoinColumn({name: 'grupo_id'})
    grupo: Grupo;
}
