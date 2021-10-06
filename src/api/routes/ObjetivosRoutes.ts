import { Router} from 'express';
import { objetivoController } from '../../controller/objetivo/ObjetivoController';
import { authenticated } from '../middleware/auth';



class ObjetivosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', authenticated, objetivoController.getAll);
    }

}

const objetivosRoutes: ObjetivosRoutes = new ObjetivosRoutes(); 

export default objetivosRoutes.router;
