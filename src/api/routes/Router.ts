import UsuarioRoutes from "./UsuarioRoutes"
import SesionRoutes from "./SesionRoutes"
import ObjetivosRoutes from "./ObjetivosRoutes"
import express from 'express'
import ObjetivoRoutes from "./ObjetivoRoutes"
import ReelsRoutes from "./ReelsRoutes"
import LikeRoutes from "./LikeRoutes"
import FavoritoRoutes from "./FavoritoRoutes"
import ReelRoutes from "./ReelRoutes"
import AccionRoutes from "./AccionRoutes"
import MonedaRoutes from "./MonedaRoutes"

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
        this.Router.use('/reel/favorito', FavoritoRoutes);
        this.Router.use('/reel', ReelRoutes);
        this.Router.use('/accion', AccionRoutes);
        this.Router.use('/moneda', MonedaRoutes);
    }

}

const Router: Routes = new Routes(); 
export default Router.Router

