import { IFavorito } from "../interfaces/reels/IFavorito";
import { ILike } from "../interfaces/reels/ILike";
import { Favorito, Like, Usuario } from "../model/Models";

var objectMapper = require('object-mapper');

class ReelMapper{

    private defLikeMapper = {
        "like": "like",
        "reelId": "reel.reelId"
      };

     private defFavoritoMapper = {
        "reelId": "reel.reelId"
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

}

const reelMapper = new ReelMapper()
export default reelMapper