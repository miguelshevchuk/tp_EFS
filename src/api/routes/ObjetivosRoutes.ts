import { Router} from 'express';
import { objetivoController } from '../../controller/objetivo/ObjetivoController';



class ObjetivosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', objetivoController.getAll);
    }

}

const objetivosRoutes: ObjetivosRoutes = new ObjetivosRoutes(); 

export default objetivosRoutes.router;
