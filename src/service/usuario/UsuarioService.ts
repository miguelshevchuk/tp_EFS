
import { getRepository } from 'typeorm'
import { authenticated } from '../../api/middleware/auth';
import { INuevoUsuario } from '../../interfaces/usuario/INuevoUsuario';
import usuarioMapper from '../../mapper/UsuarioMapper';
import { Usuario } from '../../model/Models';

class UsuarioService{
 
    public async getUsuarioBy(userid:any){
        let usuarioRepository = getRepository(Usuario);
        const usuario= await usuarioRepository.createQueryBuilder('u')
            .leftJoinAndSelect('u.perfil', 'p')
            .where('u.usuarioId = :id', { id: userid })
            .getOne();

        if (!usuario) {
            throw 'USER_NOT_FOUND'
        }

        return usuario
    }

    public async create(nuevoUsuario:INuevoUsuario){
        let usuarioRepository = getRepository(Usuario);
       await usuarioRepository.save(usuarioMapper.mapNuevoUsuario(nuevoUsuario));
    }

    public async cambiarPerfil(userId:number, nuevoPerfil:number){
        let usuarioRepository = getRepository(Usuario);
        await usuarioRepository.update({usuarioId: userId}, {perfil: {perfilId : nuevoPerfil}})
    }


}

const usuarioService = new UsuarioService()
export default usuarioService