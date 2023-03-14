import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "../../config.js";
import dotenv from "dotenv";

dotenv.config();

export const getCosmetics = async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [results] = await con.execute("SELECT * FROM cosmetic_products");
    await con.end();

    return res.status(200).send(results).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};
