import { Sequelize } from "sequelize";
const sequelize = new Sequelize('proyecto_metodologia', 'root', 'root',{
    host:'localhost',
    dialect: 'mysql'
})
export default sequelize;