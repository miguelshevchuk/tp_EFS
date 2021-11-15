
import { Router} from 'express';
import { likeController } from '../../controller/reels/LikeController';
import { monedaController } from '../../controller/simulador/MonedaController';
import { authenticated } from '../middleware/auth';



class MonedaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/precio/:moneda',authenticated, monedaController.getOne);
    }

}

const monedaRoutes: MonedaRoutes = new MonedaRoutes(); 

export default monedaRoutes.router;
