import { RendimientoInversionDTO } from "./RendimientoInversionDTO"

export class ResumenInversionesDTO{

    rendimiento:number
    inversionInicial:number
    total:number
    inversiones:RendimientoInversionDTO[]

    constructor(rendimiento:number, inversionInicial:number, total:number, inversiones:RendimientoInversionDTO[]){
        this.rendimiento = rendimiento
        this.inversionInicial = inversionInicial
        this.total = total
        this.inversiones = inversiones
    }

}