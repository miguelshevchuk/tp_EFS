import { ErrorType } from "./ErrorMap"

export abstract class EFSError extends Error{

    mensaje:String
    status:number

    constructor(error:ErrorType){
        super()
        this.mensaje = error.mensaje
        this.status = error.status
    }

}