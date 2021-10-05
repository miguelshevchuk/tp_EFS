import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    OneToMany,
    PrimaryColumn
  } from 'typeorm'

@Entity({
    schema : 'efs',
    name : 'SEXOS'
})
export class Sexo {

    
    @PrimaryColumn({name: 'sexo_id'})
    sexoId!: string

    @Column({
        name: 'descripcion'
    })
    descripcion!: string
 
}