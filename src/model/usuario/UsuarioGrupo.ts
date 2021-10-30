import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn
  } from 'typeorm'
import { Grupo, Usuario } from '../Models';

@Entity({
    name : 'USUARIOS_GRUPOS'
})
export class UsuarioGrupo {

    @PrimaryGeneratedColumn({name: 'usuario_grupo_id'})
    usuarioGrupoId!: number
  
    @Column({
        name: 'usuario_id'
    })
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

    @Column({
        name: 'grupo_id'
    })
    @ManyToOne(() => Grupo)
    @JoinColumn({name: 'grupo_id'})
    grupo: Grupo;
}
