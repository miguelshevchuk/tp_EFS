import { RendimientoInversionDTO } from "./RendimientoInversionDTO"

export class ResumenInversionesDTO{

    rendimiento:string
    inversionInicial:string
    total:string
    inversiones:RendimientoInversionDTO[]
    clasificacion:string
    portfolio:string

    constructor(rendimiento:number, inversionInicial:number, total:number, inversiones:RendimientoInversionDTO[]){
        if(rendimiento != null){
            this.rendimiento = rendimiento.toFixed(2)
        }else{
            this.rendimiento = "0"
        }
        
        this.inversionInicial = inversionInicial.toString()
        if(total != null){
            this.total = total.toFixed(2)
            this.portfolio = total.toFixed(2)
        }else{
            this.total = "0"
            this.portfolio = "0"
        }
        
        this.inversiones = inversiones
        this.clasificacion = Math.floor(Math.random() * 20).toString()
    }

}