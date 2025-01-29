import express, { Application } from 'express';
import RUsuario from '../routes/usuario';
import { Usuario } from './usuario';
import REmpleador from '../routes/empleador';
import { Empleador } from './empleador';
import { Empleo } from './empleo';
import sequelize from '../database/connection';
class Server {
    private app: Application;
    private port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3017';
        this.listen();
        this.middlewares();
        this.router();
        this.DBconnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Está ejecutándose en el puerto: " + this.port);
        })
    }
    router() {
        this.app.use(RUsuario);
        this.app.use(REmpleador);
    }
    middlewares() {
        this.app.use(express.json())//diferente al v
    }
    async DBconnect() {
        try {
            await Usuario.sync({ force: true });
            console.log("La tabla para Usuario fue re-creada");
            console.log("Conexión exitosa");
            await Empleador.sync({ force: true });
            console.log("La tabla para Empleador fue re-creada");
            console.log("Conexión exitosa");
        } catch (error) {
            console.log("Error de conexión: " + error);
        }
    }
    
}
export default Server;