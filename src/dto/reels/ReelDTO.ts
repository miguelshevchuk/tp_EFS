import { Reel } from "../../model/Models"

export class ReelDTO{

    reelId:Number
    titulo:string
    imagen:string
    monedas:Number

    constructor(reel:Reel){
            this.reelId = reel.reelId
            this.titulo = reel.titulo
            this.imagen = reel.imagen
            this.monedas = reel.clasificacion.monedas
    }

}