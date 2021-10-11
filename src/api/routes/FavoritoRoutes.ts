import { Router} from 'express';
import { favoritoController } from '../../controller/reels/FavoritoController';
import { authenticated } from '../middleware/auth';



class FavoritoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',authenticated, favoritoController.create);
        this.router.delete('/:reelId',authenticated, favoritoController.delete);
    }

}

const favoritoRoutes: FavoritoRoutes = new FavoritoRoutes(); 

export default favoritoRoutes.router;
