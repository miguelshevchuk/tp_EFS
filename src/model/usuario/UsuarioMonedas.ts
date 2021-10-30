import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn
  } from 'typeorm'
import { Usuario } from '../Models';

@Entity({
    name : 'USUARIOS_MONEDAS'
})
export class UsuarioMonedas {

    @PrimaryGeneratedColumn({name: 'usuario_monedas_id'})
    usuarioMonedasId!: number
  
    @Column({
        name: 'usuario_id'
    })
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

    @Column({
        name: 'monedas'
    })
    monedas!: number

}
