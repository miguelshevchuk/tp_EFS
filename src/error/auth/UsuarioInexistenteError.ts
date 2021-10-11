import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class UsuarioInexistenteError extends EFSError{

    constructor(){
        super(ErrorMap.USUARIO_INEXISTENTE);
    }

}