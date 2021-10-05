import { INuevoObjetivo } from "../interfaces/usuario/INuevoObjetivo";
import { UsuarioObjetivo } from "../model/Models";

var objectMapper = require('object-mapper');

class UsuarioObjetivoMapper{

    private defObjetivoMapper = {
        "usuarioId": "usuario.usuarioId",
        "objetivoId": "objetivo.objetivoId",
      };

    public mapNuevoObjetivo : (nuevoObjetivo:INuevoObjetivo) => UsuarioObjetivo = function(nuevoObjetivo){

        return Object.assign(new UsuarioObjetivo(), objectMapper(nuevoObjetivo, this.defObjetivoMapper));

    }

}

const usuarioObjetivoMapper = new UsuarioObjetivoMapper()
export default usuarioObjetivoMapper