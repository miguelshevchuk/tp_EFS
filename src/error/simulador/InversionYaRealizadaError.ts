import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class InversionYaRealizadaError extends EFSError{

    constructor(){
        super(ErrorMap.INVERSION_REALIZADA_ERROR);
    }

}