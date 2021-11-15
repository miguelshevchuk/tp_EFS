export class RendimientoInversionDTO{

    rendimiento:number
    inversionInicial:number
    total:number
    cantidad:number
    codigo:string

    constructor(rendimiento:number, inversionInicial:number, total:number, cantidad:number, codigo:string){
        this.rendimiento = rendimiento
        this.inversionInicial = inversionInicial
        this.total = total
        this.cantidad = cantidad
        this.codigo = codigo
    }

}