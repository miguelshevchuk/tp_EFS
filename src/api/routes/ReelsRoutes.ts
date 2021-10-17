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
        this.router.get('/grupos',authenticated, reelController.getGrupos);
        this.router.get('/grupo/:grupoId',authenticated, reelController.getMyReelsBySeccion);
        this.router.get('/populares/:grupoId',authenticated, reelController.getPopularReels);
    }

}

const reelsRoutes: ReelsRoutes = new ReelsRoutes(); 

export default reelsRoutes.router;
