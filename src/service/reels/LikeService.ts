
import { getRepository, Like } from 'typeorm'
import { ILogin } from '../../interfaces/usuario/ILogin';
import { Reel, Seccion, Usuario } from '../../model/Models';
import { CredencialesInvalidasError } from '../../error/auth/CredencialesInvalidasError';
import { jwtService } from '../jwt/JwtService';
import { IJwtUnsigned } from '../../interfaces/jwt/IJwtUnsigned';
import usuarioService from '../usuario/UsuarioService';
import { ILike } from '../../interfaces/reels/ILike';
import reelMapper from '../../mapper/ReelMapper';

class LikeService{

    public async create(userId:string, iLike:ILike){

        let like = reelMapper.mapNuevoLike(iLike, userId)

        let likeRepository = getRepository(Like);
        likeRepository.create(like)
    }

    public async update(userId:string, iLike:ILike){

        let likeRepository = getRepository(Like);
        likeRepository.update({usuario : {usuarioId : userId}, reel: {reelId: iLike.reelId}}, {like : iLike.like})
    }

    public async delete(userId:string, reelId:number){

        let likeRepository = getRepository(Like);
        likeRepository.delete({usuario : {usuarioId : userId}, reel: {reelId: reelId}})
    }
    
}

const likeService = new LikeService()
export default likeService