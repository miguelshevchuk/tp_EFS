import { Reel } from "../../model/Models"

export class ReelDetailDTO{

    reelId:number
    like:Boolean
    favorito:Boolean
    titulo:string
    url:string

    constructor(reel:Reel,
        like:Boolean,
        favorito:Boolean,
        url:string){
            this.favorito = favorito
            this.like = like
            this.reelId = reel.reelId
            this.titulo = reel.titulo
            this.url = url
    }

}