import { Router} from 'express';
import { accionController } from '../../controller/acciones/AccionController';
import { authenticated } from '../middleware/auth';



class AccionRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:accion',authenticated, accionController.getOne);
    }

}

const accionRoutes: AccionRoutes = new AccionRoutes(); 

export default accionRoutes.router;
