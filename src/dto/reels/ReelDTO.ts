import { Reel } from "../../model/Models"

export class ReelDTO{

    reelId:number
    titulo:string
    imagen:string
    monedas:Number
    duracion:string
    visto:boolean

    constructor(reel:Reel){
            this.reelId = reel.reelId
            this.titulo = reel.titulo
            this.imagen = reel.imagen
            this.monedas = reel.clasificacion.monedas
            this.duracion = reel.duracion
    }

}