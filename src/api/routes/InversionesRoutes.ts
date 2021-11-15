import { Router} from 'express';
import { inversionController } from '../../controller/simulador/InversionController';
import { authenticated } from '../middleware/auth';



class InversionesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',authenticated, inversionController.getAll);
    }

}

const inversionesRoutes: InversionesRoutes = new InversionesRoutes(); 

export default inversionesRoutes.router;
