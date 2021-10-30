import {
    PrimaryGeneratedColumn,
    Column,
    Entity
  } from 'typeorm'

@Entity({
    name : 'CLASIFICACIONES'
})
export class Clasificacion {

    @PrimaryGeneratedColumn({name: 'clasificacion_id'})
    clasificacionId!: number

    @Column({
        name: 'descripcion'
    })
    descripcion!: string

    @Column({
        name: 'monedas'
    })
    monedas!: number
 
}
