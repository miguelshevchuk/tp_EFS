import { RendimientoInversionDTO } from "./RendimientoInversionDTO"

export class ResumenInversionesDTO{

    rendimiento:string
    inversionInicial:string
    total:string
    inversiones:RendimientoInversionDTO[]
    clasificacion:string

    constructor(rendimiento:number, inversionInicial:number, total:number, inversiones:RendimientoInversionDTO[]){
        if(rendimiento != null){
            this.rendimiento = rendimiento.toString()
        }else{
            this.rendimiento = "0"
        }
        
        this.inversionInicial = inversionInicial.toString()
        this.total = total.toString()
        this.inversiones = inversiones
        this.clasificacion = Math.floor(Math.random() * 20).toString()
    }

}