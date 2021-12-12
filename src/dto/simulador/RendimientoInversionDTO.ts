export class RendimientoInversionDTO{

    rendimiento:string
    inversionInicial:number
    total:string
    cantidad:number
    codigo:string

    constructor(rendimiento:number, inversionInicial:number, total:number, cantidad:number, codigo:string){
        if(rendimiento != null){
            this.rendimiento = rendimiento.toFixed(2)
        }else{
            this.rendimiento = "0"
        }
        if(total != null){
            this.total = total.toFixed(2)
        }else{
            this.total = "0"
        }
        this.inversionInicial = inversionInicial
        this.cantidad = cantidad
        this.codigo = codigo
    }

}