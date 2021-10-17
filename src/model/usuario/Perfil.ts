import {
    Column,
    Entity,
    PrimaryColumn
  } from 'typeorm'

@Entity({
    name : 'PERFILES'
})
export class Perfil {

    @PrimaryColumn({name: 'perfil_id'})
    perfilId!: number

    @Column({
        name: 'descripcion'
    })
    descripcion!: string
 
}
