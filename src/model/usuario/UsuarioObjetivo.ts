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
    name : 'USUARIOS_OBJETIVO'
})
export class UsuarioObjetivo {

    
    @PrimaryGeneratedColumn({name: 'usuario_objetivo_id'})
    usuarioObjetivoId!: number

    @OneToOne(() => Objetivo)
    @JoinColumn({name: 'objetivo_id'})
    objetivo!: Objetivo

    @OneToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario!: Usuario
 
}