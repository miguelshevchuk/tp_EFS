
import { getRepository, IsNull } from 'typeorm'
import { ILogin } from '../../interfaces/usuario/ILogin';
import { Favorito, Grupo, Like, Reel, Seccion, Usuario } from '../../model/Models';
import { CredencialesInvalidasError } from '../../error/auth/CredencialesInvalidasError';
import { jwtService } from '../jwt/JwtService';
import { IJwtUnsigned } from '../../interfaces/jwt/IJwtUnsigned';
import usuarioService from '../usuario/UsuarioService';
import reelMapper from '../../mapper/ReelMapper';
import { ReelDTO } from '../../dto/reels/ReelDTO';

class ReelService{
 
    public async getGrupos(){

        let grupoRepository = getRepository(Grupo);

        return grupoRepository.find()

    }

    public async getMyReelsBySeccion(grupo:number){

        let seccionRepository = getRepository(Seccion);

        return seccionRepository.createQueryBuilder('s')
            .innerJoinAndSelect('s.reels', 'r')
            .innerJoinAndSelect('s.grupo', 'g')
            .where('g.grupoId = :grupoId', { grupoId: grupo })
            .getMany()

    }

    public async getReel(userId:number, reelId:number){

        let favoritoRepository = getRepository(Favorito);
        let likeRepository = getRepository(Like);
        let reelRepository = getRepository(Reel);

        let favorito = await favoritoRepository.findOne({usuario : {usuarioId : userId}, reel: {reelId : reelId}})
        let like = await likeRepository.findOne({usuario : {usuarioId : userId}, reel: {reelId : reelId}})
        let reel = await reelRepository.findOne({reelId : reelId})

        let esFavorito = (favorito)?true : false

        return new ReelDTO(reel, (like && like.like), esFavorito)

    }

    

}

const reelService = new ReelService()
export default reelService