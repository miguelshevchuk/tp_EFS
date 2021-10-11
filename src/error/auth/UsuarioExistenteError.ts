import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class UsuarioExistenteError extends EFSError{

    constructor(){
        super(ErrorMap.USUARIO_EXISTENTE);
    }

}