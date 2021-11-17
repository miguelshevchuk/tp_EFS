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
        name: 'open',
        type: 'float',
        nullable: true
    })
    open: number;

    @Column({
        name: 'close',
        type: 'float',
        nullable: true
    })
    close: number;

    @Column({
        name: 'high',
        type: 'float',
        nullable: true
    })
    high: number;

    @Column({
        name: 'low',
        type: 'float',
        nullable: true
    })
    low: number;

    @Column({
        name: 'fecha'
    })
    fecha: string;

    @Column({
        name: 'ultima_actualizacion'
    })
    ultimaActualizacion: string;

    constructor(fecha:string, codigo:string, open:number, close:number, high:number, low:number){        
        this.fecha = fecha
        this.ultimaActualizacion = moment().format('YYYY-MM-DD HH:mm:ss')
        this.codigo = codigo
        this.open = open
        this.close = close
        this.high = high
        this.low = low
    }

}
