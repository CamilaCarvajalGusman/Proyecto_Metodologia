import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Empleador = sequelize.define('Empleador', {
    nit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    organizacion: {
        type: DataTypes.STRING
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    sucursal: {
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
    ciudad: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Empleadors'
});

export { Empleador };
