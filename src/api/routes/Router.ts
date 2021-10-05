import UsuarioRoutes from "./UsuarioRoutes"
import SesionRoutes from "./SesionRoutes"
import ObjetivosRoutes from "./ObjetivosRoutes"
import express from 'express'
import ObjetivoRoutes from "./ObjetivoRoutes"

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
    }

}

const Router: Routes = new Routes(); 
export default Router.Router

