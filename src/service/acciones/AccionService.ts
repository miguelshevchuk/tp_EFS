
import { getRepository } from 'typeorm'
import { AccionVisualizacion } from '../../model/Models';
import reelService from '../reels/ReelService';
import { AccionDTO } from '../../dto/acciones/AccionDTO';

class AccionService{
 
    public async getAccion(accion:string, usuario:number){

        let accionRepository = getRepository(AccionVisualizacion);

        let accionReel = await accionRepository.createQueryBuilder('ar')
        .innerJoinAndSelect('ar.reel', 'r')
        .where('ar.accion = :accion', { accion: accion })
        .getOne();

        let visualizaciones = await reelService.getVisualizacion(usuario, (await accionReel).reel.reelId)

        return new AccionDTO(accionReel, (visualizaciones.length > 0))

    }



}

const accionService = new AccionService()
export default accionService