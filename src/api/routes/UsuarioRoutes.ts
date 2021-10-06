import { Router} from 'express';
import { check, validationResult } from 'express-validator';
import { usuarioController } from '../../controller/usuario/UsuarioController';



class UsuarioRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', usuarioController.create);
    }

}

const usuarioRoutes: UsuarioRoutes = new UsuarioRoutes(); 

export default usuarioRoutes.router;
