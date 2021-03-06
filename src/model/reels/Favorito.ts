import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    Unique
  } from 'typeorm'
import {  Usuario } from '../Models'
import { Reel } from './Reel'

@Entity({
    name : 'FAVORITOS'
})
@Unique(["reel", "usuario"])
export class Favorito {

    @PrimaryGeneratedColumn({name: 'favorito_id'})
    favoritoId!: number

    @Column({
        name: 'reel_id'
    })
    @ManyToOne(() => Reel)
    @JoinColumn({name: 'reel_id'})
    reel!: Reel

  
    @Column({
        name: 'usuario_id'
    })
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario!: Usuario
 
}
