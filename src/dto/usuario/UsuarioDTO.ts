import { Usuario, UsuarioMonedas } from "../../model/Models"

export class UsuarioDTO {

    monedas!: number
    email!: string
    nombre!: string
    perfil!: string
    edad:number

    constructor(usuario:Usuario, monedas:UsuarioMonedas){
        this.monedas = monedas.monedas
        this.email = usuario.email
        this.nombre = usuario.nombreApellido
        if(usuario.perfil != null){
            this.perfil = usuario.perfil.descripcion
        }
        this.edad = usuario.edad
    }



}
