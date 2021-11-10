
import { getRepository } from 'typeorm'
import { Favorito, Grupo, Like, PopularReel, Reel, Seccion, UsuarioGrupo, Visualizacion } from '../../model/Models';
import { ReelDetailDTO } from '../../dto/reels/ReelDetailDTO';
import reelMapper from '../mapper/ReelMapper';
import { UsuarioSinGrupoError } from '../../error/reel/UsuarioSinGrupoError';
import usuarioService from '../usuario/UsuarioService';

class ReelService{
 
    public async getGrupos(){

        let grupoRepository = getRepository(Grupo);

        return grupoRepository.find()

    }

    public async getMyReelsBySeccion(grupo:number, usuario:number){

        await this.verificarGrupo(grupo, usuario)

        let seccionRepository = getRepository(Seccion);

        let secciones =  await seccionRepository.createQueryBuilder('s')
            .innerJoinAndSelect('s.reels', 'r')
            .innerJoinAndSelect('s.grupo', 'g')
            .innerJoinAndSelect('r.clasificacion', 'c')
            .where('g.grupoId = :grupoId', { grupoId: grupo })
            .getMany();

        return reelMapper.mapSecciones(secciones)

    }

    private async verificarGrupo(grupo:number, usuarioId:number){
        let usuarioGrupoRepository = getRepository(UsuarioGrupo);

        let usuarioGrupo = await usuarioGrupoRepository.createQueryBuilder('ug')
            .innerJoinAndSelect('ug.usuario', 'u')
            .innerJoinAndSelect('ug.grupo', 'g')
            .where('g.grupoId = :grupoId', { grupoId: grupo })
            .andWhere('u.usuarioId = :usuarioId', { usuarioId: usuarioId })
            .getOne();

        if(!usuarioGrupo){
            throw new UsuarioSinGrupoError();
        }
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

    public async agregarVisualizacion(userId:number, reelId:number){

        let visualizacionRepository = getRepository(Visualizacion);

        let visualizacionesPrevias = await visualizacionRepository.find({usuario : {usuarioId : userId}, reel: {reelId : reelId}})

        await visualizacionRepository.save(reelMapper.mapVisualizacion(reelId, userId))

        if(!visualizacionesPrevias || visualizacionesPrevias.length ===0){
            this.agregarMonedasPorVisualizacion(userId, reelId)
        }

    }
    
    private async agregarMonedasPorVisualizacion(userId:number, reelId:number){

        let reelRepository = getRepository(Reel);

        let reel = await reelRepository.createQueryBuilder('r')
            .innerJoinAndSelect('r.clasificacion', 'c')
            .where('r.reelId = :reelId', { reelId: reelId })
            .getOne();

        usuarioService.agregarMonedas(userId, reel.clasificacion.monedas)

    }

    public async getVisualizacion(userId:number, reelId:number){

        let visualizacionRepository = getRepository(Visualizacion);

        return await visualizacionRepository.find({usuario : {usuarioId : userId}, reel: {reelId : reelId}})

    }

}

const reelService = new ReelService()
export default reelService