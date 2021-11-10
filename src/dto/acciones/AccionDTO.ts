import { AccionVisualizacion, Reel, Visualizacion } from "../../model/Models"
import { ReelDTO } from "../reels/ReelDTO"

export class AccionDTO{

    accion:string
    visto:boolean
    reel:ReelDTO

    constructor(accionVisualizacion:AccionVisualizacion, visto:boolean){
            this.accion = accionVisualizacion.accion
            this.reel = new ReelDTO(accionVisualizacion.reel)
            this.visto = visto
    }

}