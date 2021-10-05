
import { getRepository } from 'typeorm'
import { INuevoObjetivo } from '../../interfaces/usuario/INuevoObjetivo';
import { INuevoObjetivoPersonalizado } from '../../interfaces/usuario/INuevoObjetivoPersonalizado';
import UsuarioObjetivoMapper from '../../mapper/UsuarioObjetivoMapper';
import { Objetivo, UsuarioObjetivo } from '../../model/Models';

class ObjetivoService{
 
    public async getAll(){
        let objetivoRepository = getRepository(Objetivo);

        return objetivoRepository.find();
    }

    public async create(nuevoObjetivo:INuevoObjetivo){
        let usuarioObjetivoRepository = getRepository(UsuarioObjetivo);
        usuarioObjetivoRepository.delete({usuario: {usuarioId : nuevoObjetivo.usuarioId}})
        return usuarioObjetivoRepository.save(UsuarioObjetivoMapper.mapNuevoObjetivo(nuevoObjetivo))
    }

    public async createPersonalizado(nuevoObjetivo:INuevoObjetivoPersonalizado){
        let usuarioObjetivoRepository = getRepository(UsuarioObjetivo);
        usuarioObjetivoRepository.delete({usuario: {usuarioId : nuevoObjetivo.usuarioId}})
        let usuarioObjetivo = usuarioObjetivoRepository.save(UsuarioObjetivoMapper.mapNuevoObjetivo(nuevoObjetivo))

        //todo guardar en la tabla de personalizados
    }

}

const objetivoService = new ObjetivoService()
export default objetivoService