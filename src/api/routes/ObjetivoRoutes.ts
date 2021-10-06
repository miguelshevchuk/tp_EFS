import { Router} from 'express';
import { objetivoController } from '../../controller/objetivo/ObjetivoController';
import { authenticated } from '../middleware/auth';



class ObjetivoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', authenticated, objetivoController.create);
        this.router.post('/personalizado', authenticated, objetivoController.createPersonalizado);
    }

}

const objetivoRoutes: ObjetivoRoutes = new ObjetivoRoutes(); 

export default objetivoRoutes.router;
