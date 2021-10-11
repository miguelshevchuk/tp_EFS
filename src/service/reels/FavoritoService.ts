
import { getRepository } from 'typeorm'
import { Favorito} from '../../model/Models';
import { IFavorito } from '../../interfaces/reels/IFavorito';
import reelMapper from '../../mapper/ReelMapper';

class FavoritoService{
 
    public async save(usuarioId:string, iFavorito:IFavorito){
        let favoritoRepository = getRepository(Favorito);

        await favoritoRepository.save(reelMapper.mapFavorito(iFavorito, usuarioId))

    }

    public async delete(userId:string, reelId:number){

        let favoritoRepository = getRepository(Favorito);
        await favoritoRepository.delete({usuario : {usuarioId : parseInt(userId)}, reel: {reelId: reelId}})
    }

    

}

const favoritoService = new FavoritoService()
export default favoritoService