import {
    Column,
    Entity,
    PrimaryColumn
  } from 'typeorm'

@Entity({
    name : 'OBJETIVOS'
})
export class Objetivo {


    @PrimaryColumn({name: 'objetivo_id'})
    objetivoId!: number

    @Column({
        name: 'descripcion'
    })
    descripcion!: string

    @Column({
        name: 'imagen'
    })
    imagen!: string
 
}