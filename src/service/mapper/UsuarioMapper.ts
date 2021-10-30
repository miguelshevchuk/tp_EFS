import { MonedasDTO } from "../../dto/usuario/MonedasDTO";
import { INuevoUsuario } from "../../interfaces/usuario/INuevoUsuario";
import { Usuario, UsuarioGrupo, UsuarioMonedas } from "../../model/Models";

var objectMapper = require('object-mapper');

class UsuarioMapper{

    private defNuevoUsuarioMapper = {
        "password": "password",
        "email": "email",
        "sexo": "sexo.sexoId",
        "edad": "edad",
        "nombreApellido": "nombreApellido"
      };

    private defNuevoUsuarioMonedas = {
        "usuarioId": "usuario.usuarioId",
        10000: "monedas"
      };

    private defNuevoUsuarioGrupo = {
        "usuarioId": "usuario.usuarioId",
        1: "grupo.grupoId"
      };

    private defMonedasDTO = {
        "monedas": "monedas"
      };

    public mapNuevoUsuario : (nuevoUsuario:INuevoUsuario) => Usuario = function(nuevoUsuario){

        return Object.assign(new Usuario(), objectMapper(nuevoUsuario, this.defNuevoUsuarioMapper));

    }

    public mapNuevoUsuarioMonedas : (nuevoUsuario:Usuario) => UsuarioMonedas = function(nuevoUsuario){

        let usuarioMonedas =  Object.assign(new UsuarioMonedas(), objectMapper(nuevoUsuario, this.defNuevoUsuarioMonedas));
        usuarioMonedas.monedas = 10000
        return usuarioMonedas;

    }

    public mapNuevoUsuarioGrupo : (nuevoUsuario:Usuario) => UsuarioGrupo = function(nuevoUsuario){

        let usuarioGrupo =  Object.assign(new UsuarioGrupo(), objectMapper(nuevoUsuario, this.defNuevoUsuarioGrupo));
        usuarioGrupo.grupo = {grupoId : 1}
        return usuarioGrupo;

    }

    public mapMonedasDTO : (usuarioMonedas:UsuarioMonedas) => MonedasDTO = function(usuarioMonedas){

        return Object.assign(new MonedasDTO(), objectMapper(usuarioMonedas, this.defMonedasDTO));

    }

}

const usuarioMapper = new UsuarioMapper()
export default usuarioMapper