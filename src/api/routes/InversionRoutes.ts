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
        this.router.delete('/:moneda',authenticated, inversionController.delete);
    }

}

const inversionRoutes: InversionRoutes = new InversionRoutes(); 

export default inversionRoutes.router;
