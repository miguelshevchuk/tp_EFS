import { ILike } from "../interfaces/reels/ILike";
import { INuevoUsuario } from "../interfaces/usuario/INuevoUsuario";
import { Like, Usuario } from "../model/Models";

var objectMapper = require('object-mapper');

class ReelMapper{

    private defLikeMapper = {
        "like": "like",
        "reelId": "reel.reelId"
      };

    public mapNuevoLike : (nuevoLike:ILike, usuarioId:string) => Like = function(nuevoLike, usuarioId){

        let like =  Object.assign(new Like(), objectMapper(nuevoLike, this.defLikeMapper));

        like.usuario.usuarioId = usuarioId

        return like

    }

}

const reelMapper = new ReelMapper()
export default reelMapper