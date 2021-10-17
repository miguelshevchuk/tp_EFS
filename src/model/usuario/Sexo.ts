import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    OneToMany,
    PrimaryColumn
  } from 'typeorm'

@Entity({
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