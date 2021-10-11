import { Router} from 'express';
import { reelController } from '../../controller/reels/ReelController';
import { sesionController } from '../../controller/usuario/SesionController';
import { authenticated } from '../middleware/auth';



class ReelsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/me',authenticated, reelController.getMyReels);
        this.router.get('/:seccionId/me',authenticated, reelController.getMyReelsBySeccion);
    }

}

const reelsRoutes: ReelsRoutes = new ReelsRoutes(); 

export default reelsRoutes.router;
