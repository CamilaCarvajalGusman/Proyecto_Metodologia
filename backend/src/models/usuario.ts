import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
export const Usuario = sequelize.define(
    'Usuario',
    {
        ci: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nombres: {
            type: DataTypes.STRING
        },
        apellidos: {
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.INTEGER
        },
        correo: {
            type: DataTypes.STRING,
            unique: true
        },
        contrasenia: {
            type: DataTypes.STRING
        },
        fec_nac: {
            type: DataTypes.DATEONLY
        },
        ciudad: {
            type: DataTypes.STRING
        },
        oficio_profesion: {
            type: DataTypes.STRING
        },
        mudarse: {
            type: DataTypes.BOOLEAN
        },
        curriculum: {
            type: DataTypes.STRING
        },
        diagnostico: {
            type: DataTypes.STRING
        },
        grado_apoyo: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }
)