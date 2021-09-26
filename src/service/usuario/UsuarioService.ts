
import { getRepository } from 'typeorm'
import { Usuario } from '../../model/Models';

class UsuarioService{
 
    public async getUsuarioBy(userid:any){
        let usuarioRepository = getRepository(Usuario);
        const usuario= await usuarioRepository.findOne({idUsuario: userid});

        if (!usuario) {
            throw 'USER_NOT_FOUND'
        }

        return usuario
    }

    public async create(usuario:Usuario){
        let usuarioRepository = getRepository(Usuario);
       await usuarioRepository.save(usuario);
    }


}

const usuarioService = new UsuarioService()
export default usuarioService