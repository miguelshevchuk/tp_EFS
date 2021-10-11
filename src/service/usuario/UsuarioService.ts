
import { getRepository } from 'typeorm'
import { authenticated } from '../../api/middleware/auth';
import { UsuarioExistenteError } from '../../error/auth/UsuarioExistenteError';
import { UsuarioInexistenteError } from '../../error/auth/UsuarioInexistenteError';
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
            throw new UsuarioInexistenteError()
        }

        return usuario
    }

    public async create(nuevoUsuario:INuevoUsuario){
        let usuarioRepository = getRepository(Usuario);

        let usuarioExistente = await usuarioRepository.findOne({email : nuevoUsuario.email});

        console.log(usuarioExistente)

        if(usuarioExistente){
            throw new UsuarioExistenteError()
        }

       await usuarioRepository.save(usuarioMapper.mapNuevoUsuario(nuevoUsuario));
    }

    public async cambiarPerfil(userId:number, nuevoPerfil:number){
        let usuarioRepository = getRepository(Usuario);
        await usuarioRepository.update({usuarioId: userId}, {perfil: {perfilId : nuevoPerfil}})
    }


}

const usuarioService = new UsuarioService()
export default usuarioService