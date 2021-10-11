import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryColumn,
    OneToMany
  } from 'typeorm'
import { reelController } from '../../controller/reels/ReelController'
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

  
    @Column({
        name: 'seccion_padre_id',
        nullable: true
    })
    @ManyToOne(() => Seccion)
    @JoinColumn({name: 'seccion_padre_id'})
    seccionPadre!: Seccion    

    @OneToMany(() => Reel, reel => reel.seccion)
    reels!: Reel[];  
 
}
