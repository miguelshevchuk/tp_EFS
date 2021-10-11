import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import {  Usuario } from '../Models'
import { Reel } from './Reel'

@Entity({
    schema : 'efs',
    name : 'LIKES'
})
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
        name: 'like'
    })
    like!: Boolean
 
}
