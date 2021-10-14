import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    Unique
  } from 'typeorm'
import { Perfil } from './Perfil'
import { Sexo } from './Sexo'

@Entity({
    schema : 'efs',
    name : 'USUARIOS'
})
@Unique(["email"])
export class Usuario {

    @PrimaryGeneratedColumn({name: 'usuario_id'})
    usuarioId!: number

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
        name: 'nombre_apellido'
    })
    nombreApellido!: string
     
    
    @Column({
        name: 'sexo_id'
    })
    @ManyToOne(() => Sexo)
    @JoinColumn({name: 'sexo_id'})
    sexo!: Sexo

    @Column({
        name: 'perfil_id',
        nullable: true
    })
    @ManyToOne(() => Perfil)
    @JoinColumn({name: 'perfil_id'})
    perfil: Perfil
    
 
}
