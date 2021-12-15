import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class InversionNoRealizadaError extends EFSError{

    constructor(){
        super(ErrorMap.INVERSION_NO_REALIZADA_ERROR);
    }

}