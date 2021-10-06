import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class CredencialesInvalidasError extends EFSError{

    constructor(){
        super(ErrorMap.CREDENCIALES_INVALIDAS);
    }

}