
import { getRepository } from 'typeorm'
import { ILogin } from '../../interfaces/usuario/ILogin';
import { Reel, Seccion, Usuario } from '../../model/Models';
import { CredencialesInvalidasError } from '../../error/auth/CredencialesInvalidasError';
import { jwtService } from '../jwt/JwtService';
import { IJwtUnsigned } from '../../interfaces/jwt/IJwtUnsigned';
import usuarioService from '../usuario/UsuarioService';

class ReelService{
 
    public async getReelsByUser(usuarioId:String){
        let usuario = await usuarioService.getUsuarioBy(usuarioId);

        let reelRepository = getRepository(Reel);

        return reelRepository.find({perfilRecomendado : {perfilId : usuario.perfil.perfilId}})

    }

    public async getMyReelsBySeccion(usuarioId:String, seccionPadre:number){
        let usuario = await usuarioService.getUsuarioBy(usuarioId);

        let seccionRepository = getRepository(Seccion);

        return seccionRepository.createQueryBuilder('s')
            .innerJoinAndSelect('s.reels', 'r')
            .innerJoinAndSelect('r.perfilRecomendado', 'p')
            .leftJoinAndSelect('s.seccionPadre', 'sp')
            .where('p.perfilId = :perfilId', { perfilId: usuario.perfil.perfilId })
            .andWhere('sp.seccionId = :seccionId', { seccionId: seccionPadre })
            .getMany()

    }

    

}

const reelService = new ReelService()
export default reelService