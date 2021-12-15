export class VentaResponseDTO{

    monedasObtenidas:number
    total:number

    constructor(monedasObtenidas:number, total:number){
        this.monedasObtenidas = monedasObtenidas
        this.total = total
    }

}