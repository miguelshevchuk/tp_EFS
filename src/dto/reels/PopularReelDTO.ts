import { Reel } from "../../model/Models"
import { ReelDTO } from "./ReelDTO"

export class PopularReelDTO extends ReelDTO{

    likes:Number

    constructor(reel:Reel, likes){
            super(reel)
            this.likes = likes
    }

}