import { ReelDTO } from "../../dto/reels/ReelDTO";
import { SeccionDTO } from "../../dto/reels/SeccionDTO";
import { IFavorito } from "../../interfaces/reels/IFavorito";
import { ILike } from "../../interfaces/reels/ILike";
import { Favorito, Like, Reel, Seccion, Usuario } from "../../model/Models";

var objectMapper = require('object-mapper');

class ReelMapper{

    private defLikeMapper = {
        "like": "like",
        "reelId": "reel.reelId"
      };

     private defFavoritoMapper = {
        "reelId": "reel.reelId"
      };

    private defSeccionMapper = {
        "seccionId": "seccionId",
        "titulo": "titulo",
        "reels": {key : "reels", transform: function (value){
            let reelsDTO = []
            
            for(let i=0; i<value.length; i++){
                reelsDTO.push(new ReelDTO(value[i]))
            }
            
            return reelsDTO
        }}
    };

    private defReelDTOMapper = {
        "reelId": "reelId",
        "titulo": "titulo"
    };

    public mapNuevoLike : (nuevoLike:ILike, usuarioId:string) => Like = function(nuevoLike, usuarioId){

        let like =  Object.assign(new Like(), objectMapper(nuevoLike, this.defLikeMapper));

        like.usuario = {usuarioId : parseInt(usuarioId)}

        return like

    }

    public mapFavorito : (nuevoFavorito:IFavorito, usuarioId:string) => Favorito = function(nuevoFavorito, usuarioId){

        let favorito =  Object.assign(new Favorito(), objectMapper(nuevoFavorito, this.defFavoritoMapper));

        favorito.usuario = {usuarioId : parseInt(usuarioId)}

        return favorito

    }

    public mapSecciones : (secciones:Seccion[]) => SeccionDTO[] = function(secciones){

        let seccionesDTO = []

        for(let i=0; i<secciones.length; i++){
            seccionesDTO.push(Object.assign(new SeccionDTO(), objectMapper(secciones[i], this.defSeccionMapper)))
        }

        return seccionesDTO

    }

}

const reelMapper = new ReelMapper()
export default reelMapper