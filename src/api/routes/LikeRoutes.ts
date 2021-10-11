import { Router} from 'express';
import { likeController } from '../../controller/reels/LikeController';
import { authenticated } from '../middleware/auth';



class LikeRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',authenticated, likeController.create);
        this.router.delete('/:reelId',authenticated, likeController.delete);
    }

}

const likeRoutes: LikeRoutes = new LikeRoutes(); 

export default likeRoutes.router;
