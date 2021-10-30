import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class UsuarioSinGrupoError extends EFSError{

    constructor(){
        super(ErrorMap.USUARIO_SIN_GRUPO_ERROR);
    }

}