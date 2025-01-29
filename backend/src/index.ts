import Server from "./models/server";
import dotenv from "dotenv";
import express from 'express';
import sequelize from './database/connection';
import { Empleador } from './models/empleador';
import { Empleo } from './models/empleo';
import RUsuario from './routes/usuario';
dotenv.config();
const server = new Server();

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Tablas sincronizadas correctamente");
    } catch (error) {
        console.error("Error al sincronizar las tablas:", error);
    }
})();