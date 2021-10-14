import { Router} from 'express';
import { reelController } from '../../controller/reels/ReelController';
import { sesionController } from '../../controller/usuario/SesionController';
import { authenticated } from '../middleware/auth';



class ReelRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:reelId',authenticated, reelController.getOne);
    }

}

const reelRoutes: ReelRoutes = new ReelRoutes(); 

export default reelRoutes.router;
