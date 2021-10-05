import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
  } from 'typeorm'
import { Sexo } from './Sexo'

@Entity({
    schema : 'efs',
    name : 'USUARIOS'
})
export class Usuario {

    @PrimaryGeneratedColumn({name: 'usuario_id'})
    usuarioId!: string

    @Column({
        name: 'password'
    })
    password!: string

  
    @Column({
        name: 'email'
    })
    email!: string
 
    @Column({
        name: 'edad'
    })
    edad!: number
     
    
    @Column({
        name: 'sexo_id'
    })
    @ManyToOne(() => Sexo)
    @JoinColumn({name: 'sexo_id'})
    sexo!: Sexo
 
}
