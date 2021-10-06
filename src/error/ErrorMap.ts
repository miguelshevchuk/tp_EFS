type MapError = Record<string, ErrorType>;

export class ErrorType {

    mensaje:string
    status:number

    constructor(mensaje, status=406){
        this.mensaje = mensaje
        this.status = status
    }
    
}


export const ErrorMap: MapError = {
    CREDENCIALES_INVALIDAS: new ErrorType("Las credenciales ingresadas son invalidas", 401),
    JWT_SECRET: new ErrorType("Error de configuracion"),
    JWT_CREATE: new ErrorType("Error al generar el token"),
}
