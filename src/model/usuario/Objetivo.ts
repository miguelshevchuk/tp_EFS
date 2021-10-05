import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    OneToMany
  } from 'typeorm'
import { Usuario } from '../Models';

@Entity({
    schema : 'efs',
    name : 'OBJETIVOS'
})
export class Objetivo {


    @PrimaryGeneratedColumn({name: 'objetivo_id'})
    objetivoId!: string

    @Column({
        name: 'descripcion'
    })
    descripcion!: string

    @Column({
        name: 'imagen'
    })
    imagen!: string
 
}