import {
    PrimaryGeneratedColumn,
    Column,
    Entity
  } from 'typeorm'

@Entity({
    schema : 'efs',
    name : 'usuarios'
})
export class Usuario {

    
    @Column({
        name: 'id_usuario'
    })
    @PrimaryGeneratedColumn(
        )
    idUsuario!: string

    @Column({
        name: 'password'
    })
    password!: string

  
    @Column({
        name: 'usuario'
    })
    usuario!: string
 
}
