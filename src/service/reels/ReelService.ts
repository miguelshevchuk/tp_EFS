
import { getRepository } from 'typeorm'
import { Favorito, Grupo, Like, PopularReel, Reel, Seccion } from '../../model/Models';
import { ReelDetailDTO } from '../../dto/reels/ReelDetailDTO';
import cloudinaryService from '../cloudinary/CloudinaryService';
import reelMapper from '../mapper/ReelMapper';

class ReelService{
 
    public async getGrupos(){

        let grupoRepository = getRepository(Grupo);

        return grupoRepository.find()

    }

    public async getMyReelsBySeccion(grupo:number){

        let seccionRepository = getRepository(Seccion);

        let secciones =  await seccionRepository.createQueryBuilder('s')
            .innerJoinAndSelect('s.reels', 'r')
            .innerJoinAndSelect('s.grupo', 'g')
            .where('g.grupoId = :grupoId', { grupoId: grupo })
            .getMany();

        return reelMapper.mapSecciones(secciones)

    }

    public async getPopularReels(grupo:number){

        let popularReelRepository = getRepository(PopularReel);

        
        return await popularReelRepository.createQueryBuilder('pr')
            .where('pr.grupoId = :grupoId', { grupoId: grupo })
            .limit(10)
            .orderBy('pr.cantidadLikes', "DESC")
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

        return new ReelDetailDTO(reel, (like && like.like), esFavorito)

    }

    

}

const reelService = new ReelService()
export default reelService