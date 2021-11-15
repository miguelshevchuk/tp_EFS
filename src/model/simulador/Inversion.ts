import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn
  } from 'typeorm'
import { Usuario } from '../Models';

@Entity({
    name : 'INVERSIONES'
})
export class Inversion {

    @PrimaryGeneratedColumn({name: 'inversion_id'})
    inversionId!: number
  
    @Column({
        name: 'usuario_id'
    })
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

    @Column({
        name: 'fecha'
    })
    fecha!: Date

    @Column({
        name: 'codigo'
    })
    codigo!: string

    @Column({
        name: 'cantidad',
        type: 'float'
    })
    cantidad!: number

    @Column({
        name: 'inversion_inicial',
        type: 'float'
    })
    inversionInicial!: number

    @Column({
        name: 'precio_compra',
        type: 'float'
    })
    precioCompra!: number

    constructor(userId, cantidad, precioCompra, inversionInicial, codigo){
        this.usuario = new Usuario()
        this.usuario.usuarioId = userId
        this.cantidad = cantidad
        this.precioCompra = precioCompra
        this.inversionInicial = inversionInicial
        this.codigo = codigo
        this.fecha = new Date()
    }
}
