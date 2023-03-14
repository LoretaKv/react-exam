import dotenv from "dotenv";
import mysql from "mysql2/promise";
import Joi from "joi";
import bcrypts from "bcryptjs";
import { MYSQL_CONFIG } from "../../config.js";

dotenv.config();

const userSchema = Joi.object({
  name: Joi.string().trim().required(),
  surname: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().required(),
});

export const registerNewUser = async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res.status(400).send({ error: error.message }).end();
  }

  try {
    const hashedPassword = bcrypts.hashSync(userData.password);
    const fullName = `${userData.name} ${userData.surname}`;
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `INSERT INTO all_users (full_name,email, password) VALUES (${mysql.escape(
        fullName
      )},${mysql.escape(userData.email)},'${hashedPassword}')`
    );

    await con.end();

    return res.status(200).send("Your registration was succesfull").end();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
