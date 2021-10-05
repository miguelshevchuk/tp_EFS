import { Router} from 'express';
import { objetivoController } from '../../controller/objetivo/ObjetivoController';



class ObjetivoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', objetivoController.create);
        this.router.post('/personalizado', objetivoController.createPersonalizado);
    }

}

const objetivoRoutes: ObjetivoRoutes = new ObjetivoRoutes(); 

export default objetivoRoutes.router;
