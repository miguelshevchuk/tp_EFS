
import { getRepository } from 'typeorm'
import { authenticated } from '../../api/middleware/auth';
import { UsuarioExistenteError } from '../../error/auth/UsuarioExistenteError';
import { UsuarioInexistenteError } from '../../error/auth/UsuarioInexistenteError';
import { INuevoUsuario } from '../../interfaces/usuario/INuevoUsuario';
import { IPuntaje } from '../../interfaces/usuario/IPuntaje';
import usuarioMapper from '../../mapper/UsuarioMapper';
import { Perfil, Usuario } from '../../model/Models';
import { PerfilMap } from './PerfilMap';

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

    public async cambiarPerfil(userId:number, puntaje:IPuntaje){
        let usuarioRepository = getRepository(Usuario);
        
        let perfil= PerfilMap.AGRESIVO
        
        if(puntaje.puntaje <= 15){
            perfil = PerfilMap.CONSERVADOR
        }else if(puntaje.puntaje <= 24){
            perfil = PerfilMap.MODERADO
        }

        await usuarioRepository.update({usuarioId: userId}, {perfil: {perfilId : perfil}})
    }


}

const usuarioService = new UsuarioService()
export default usuarioService