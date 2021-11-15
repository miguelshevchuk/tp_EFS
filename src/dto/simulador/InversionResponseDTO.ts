export class InversionResponseDTO{

    monedasRestantes:number
    cantidadComprada:number
    inversionRealizada:number

    constructor(monedasRestantes:number, cantidadComprada:number, inversionRealizada:number){
        this.monedasRestantes = monedasRestantes
        this.cantidadComprada = cantidadComprada
        this.inversionRealizada = inversionRealizada
    }

}