
import { getRepository } from 'typeorm'
import { UsuarioExistenteError } from '../../error/auth/UsuarioExistenteError';
import { UsuarioInexistenteError } from '../../error/auth/UsuarioInexistenteError';
import { INuevoUsuario } from '../../interfaces/usuario/INuevoUsuario';
import { IPuntaje } from '../../interfaces/usuario/IPuntaje';
import usuarioMapper from '../mapper/UsuarioMapper';
import { Usuario, UsuarioGrupo, UsuarioMonedas } from '../../model/Models';
import { PerfilMap } from './PerfilMap';
import { UsuarioDTO } from '../../dto/usuario/UsuarioDTO';

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

        if(usuarioExistente){
            throw new UsuarioExistenteError()
        }

       let usuarioCreado = await usuarioRepository.save(usuarioMapper.mapNuevoUsuario(nuevoUsuario));
       this.asignarMonedasIniciales(usuarioCreado);
       this.asignarGrupoPrincipiante(usuarioCreado);
    }

    private async asignarMonedasIniciales(usuario:Usuario){
        let usuarioMonedasRepository = getRepository(UsuarioMonedas);
        await usuarioMonedasRepository.save(usuarioMapper.mapNuevoUsuarioMonedas(usuario))
    }

    private async asignarGrupoPrincipiante(usuario:Usuario){
        let usuarioGrupoRepository = getRepository(UsuarioGrupo);
        await usuarioGrupoRepository.save(usuarioMapper.mapNuevoUsuarioGrupo(usuario))
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

    private async getUsuarioMonedas(userId:number){
        let usuarioMonedasRepository = getRepository(UsuarioMonedas);

        return await usuarioMonedasRepository.createQueryBuilder('um')
        .leftJoinAndSelect('um.usuario', 'u')
        .where('u.usuarioId = :id', { id: userId })
        .getOne();
    }

    public async getMonedasDelUsuario(userId:number){

        let usuarioMonedas =  await this.getUsuarioMonedas(userId)

        return usuarioMapper.mapMonedasDTO(usuarioMonedas);
    }

    public async agregarMonedas(userId:number, monedas:number){
        let usuarioMonedas =  await this.getUsuarioMonedas(userId)

        let usuarioMonedasRepository = getRepository(UsuarioMonedas);
        await usuarioMonedasRepository.update({usuarioMonedasId: usuarioMonedas.usuarioMonedasId}, 
            {monedas: usuarioMonedas.monedas + monedas})

    }

    public async getUsuario(userId:number){

        let usuario = await this.getUsuarioBy(userId)

        let monedas = await this.getUsuarioMonedas(userId)

        return new UsuarioDTO(usuario, monedas)
    }


}

const usuarioService = new UsuarioService()
export default usuarioService