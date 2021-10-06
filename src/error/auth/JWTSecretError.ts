import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class JWTSecretError extends EFSError{

    constructor(){
        super(ErrorMap.JWT_SECRET);
    }

}