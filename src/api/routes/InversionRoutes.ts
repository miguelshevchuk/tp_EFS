import { Router} from 'express';
import { inversionController } from '../../controller/simulador/InversionController';
import { authenticated } from '../middleware/auth';



class InversionRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',authenticated, inversionController.create);
    }

}

const inversionRoutes: InversionRoutes = new InversionRoutes(); 

export default inversionRoutes.router;
