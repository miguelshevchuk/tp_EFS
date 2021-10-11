import { Router} from 'express';
import { check, validationResult } from 'express-validator';
import { usuarioController } from '../../controller/usuario/UsuarioController';
import { authenticated } from '../middleware/auth';



class UsuarioRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', usuarioController.create);
        this.router.put('/perfil/:perfilId', authenticated, usuarioController.cambiarPerfil);
    }

}

const usuarioRoutes: UsuarioRoutes = new UsuarioRoutes(); 

export default usuarioRoutes.router;
