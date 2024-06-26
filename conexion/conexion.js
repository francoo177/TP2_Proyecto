import { Sequelize } from "sequelize";

import {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT,
    DB_PORT,
  } from "../config/config.js";
  
  const conexion = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
  });

try {
    await conexion.authenticate();
    console.log('conexion a la BD hecha todo OKK');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  export default conexion;

