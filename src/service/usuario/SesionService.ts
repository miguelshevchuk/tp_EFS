
import { getRepository } from 'typeorm'
import { ILogin } from '../../interfaces/usuario/ILogin';
import { Usuario } from '../../model/Models';

class SesionService{
 

    public async login(login:ILogin){
        let usuarioRepository = getRepository(Usuario);
        const usuario= await usuarioRepository.findOne({email: login.usuario, password: login.password});

        if (!usuario) {
            throw 'USER_NOT_FOUND'
        }

        return "JWT";
    }


}

const sesionService = new SesionService()
export default sesionService