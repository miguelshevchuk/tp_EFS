import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class JWTCreateError extends EFSError{

    constructor(){
        super(ErrorMap.JWT_CREATE);
    }

}