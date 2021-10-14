import { Reel } from "../../model/Models"

export class ReelDTO{

    reelId:number
    like:Boolean
    favorito:Boolean
    titulo:string

    constructor(reel:Reel,
        like:Boolean,
        favorito:Boolean){
            this.favorito = favorito
            this.like = like
            this.reelId = reel.reelId
            this.titulo = reel.titulo
    }

}