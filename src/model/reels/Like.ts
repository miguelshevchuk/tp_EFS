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
    name : 'LIKES'
})
@Unique(["reel", "usuario"])
export class Like {

    @PrimaryGeneratedColumn({name: 'like_id'})
    likeId!: number

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

    @Column({
        name: 'like',
        nullable:false
    })
    like!: Boolean
 
}
