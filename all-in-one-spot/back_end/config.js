import dotenv from "dotenv";
dotenv.config();

export const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

export const PORT = process.env.SERVERPORT || 5000;
export const jwtSecret = process.env.jwt_secret;
