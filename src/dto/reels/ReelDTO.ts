import { Reel } from "../../model/Models"

export class ReelDTO{

    reelId:Number
    titulo:string

    constructor(reel:Reel){
            this.reelId = reel.reelId
            this.titulo = reel.titulo
    }

}