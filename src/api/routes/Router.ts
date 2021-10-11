import UsuarioRoutes from "./UsuarioRoutes"
import SesionRoutes from "./SesionRoutes"
import ObjetivosRoutes from "./ObjetivosRoutes"
import express from 'express'
import ObjetivoRoutes from "./ObjetivoRoutes"
import ReelsRoutes from "./ReelsRoutes"
import LikeRoutes from "./LikeRoutes"

class Routes {

    public Router = express.Router()

    constructor() {
        this.config();
    }

    private config(): void {
        this.Router.use('/usuario', UsuarioRoutes);
        this.Router.use('/sesion', SesionRoutes);
        this.Router.use('/objetivos', ObjetivosRoutes);
        this.Router.use('/objetivo', ObjetivoRoutes);
        this.Router.use('/reels', ReelsRoutes);
        this.Router.use('/reel/like', LikeRoutes);
    }

}

const Router: Routes = new Routes(); 
export default Router.Router

