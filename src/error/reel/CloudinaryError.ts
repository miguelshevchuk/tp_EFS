import { EFSError } from "../EFSError";
import { ErrorMap } from "../ErrorMap";

export class CloudinaryError extends EFSError{

    constructor(){
        super(ErrorMap.CLOUDINARY_ERROR);
    }

}