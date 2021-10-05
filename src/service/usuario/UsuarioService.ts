
import { getRepository } from 'typeorm'
import { INuevoUsuario } from '../../interfaces/usuario/INuevoUsuario';
import usuarioMapper from '../../mapper/UsuarioMapper';
import { Usuario } from '../../model/Models';

class UsuarioService{
 
    public async getUsuarioBy(userid:any){
        let usuarioRepository = getRepository(Usuario);
        const usuario= await usuarioRepository.findOne({usuarioId: userid});

        if (!usuario) {
            throw 'USER_NOT_FOUND'
        }

        return usuario
    }

    public async create(nuevoUsuario:INuevoUsuario){
        let usuarioRepository = getRepository(Usuario);
       await usuarioRepository.save(usuarioMapper.mapNuevoUsuario(nuevoUsuario));
    }


}

const usuarioService = new UsuarioService()
export default usuarioService