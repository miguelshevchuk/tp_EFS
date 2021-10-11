
import { getRepository, Repository } from 'typeorm'
import { Like} from '../../model/Models';
import { ILike } from '../../interfaces/reels/ILike';
import reelMapper from '../../mapper/ReelMapper';

class LikeService{

    public async like(userId:string, iLike:ILike){
        let likeRepository = getRepository(Like);

        let likeExistente = await likeRepository.findOne({usuario : {usuarioId : parseInt(userId)}, reel: {reelId: iLike.reelId}})

        if(likeExistente){
            this.update(userId, iLike, likeRepository)
        }else{
            this.save(userId, iLike, likeRepository)
        }
        
    }

    private async save(userId:string, iLike:ILike, likeRepository:Repository<Like>){
        let like = reelMapper.mapNuevoLike(iLike, userId)       
        await likeRepository.save(like)        
    }

    private async update(userId:string, iLike:ILike, likeRepository:Repository<Like>){
        await likeRepository.update({usuario : {usuarioId : parseInt(userId)}, reel: {reelId: iLike.reelId}}, {like : iLike.like})
    }

    public async delete(userId:string, reelId:number){

        let likeRepository = getRepository(Like);
        await likeRepository.delete({usuario : {usuarioId : parseInt(userId)}, reel: {reelId: reelId}})
    }
    
}

const likeService = new LikeService()
export default likeService