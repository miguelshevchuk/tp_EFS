

export class PrecioHistoricoDTO{

    fecha:Date
    valor:number
    codigo:string

    constructor(timeStamp:string, valor:number, codigo:string){
        this.fecha = new Date(timeStamp)
        this.valor = valor
        this.codigo = codigo
    }

}