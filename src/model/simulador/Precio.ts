import {
    PrimaryGeneratedColumn,
    Column,
    Entity
  } from 'typeorm'
  import moment from "moment";

@Entity({
    name : 'PRECIOS'
})
export class Precio {

    @PrimaryGeneratedColumn({name: 'precio_id'})
    precioId!: number

    @Column({
        name: 'codigo'
    })
    codigo!: string

    @Column({
        name: 'valor',
        type: 'float'
    })
    valor: number;

    @Column({
        name: 'fecha'
    })
    fecha: string;

    @Column({
        name: 'ultima_actualizacion'
    })
    ultimaActualizacion: string;

    constructor(fecha:string, valor:number, codigo:string){        
        this.fecha = fecha
        this.ultimaActualizacion = moment().format('YYYY-MM-DD HH:mm:ss')
        this.valor = valor
        this.codigo = codigo
    }

}
