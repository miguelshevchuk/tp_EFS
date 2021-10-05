import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    OneToMany,
    OneToOne,
    JoinColumn
  } from 'typeorm'
import { Usuario } from '../Models';
import { Objetivo } from './Objetivo';

@Entity({
    schema : 'efs',
    name : 'USUARIOS_OBJETIVO'
})
export class UsuarioObjetivo {

    
    @PrimaryGeneratedColumn({name: 'usuario_objetivo_id'})
    usuarioObjetivoId!: string

    @Column({
        name: 'objetivo_id'
    })
    @OneToOne(() => Objetivo)
    @JoinColumn({name: 'objetivo_id'})
    objetivo!: Objetivo

    @Column({
        name: 'usuario_id'
    })
    @OneToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario!: Usuario
 
}