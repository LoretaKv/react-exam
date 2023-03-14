import dotenv from "dotenv";
import mysql from "mysql2/promise";
import Joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtSecret, MYSQL_CONFIG } from "../../config.js";

dotenv.config();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

export const signIn = async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res.status(400).send({ error: "Incorrect details provided" }).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `SELECT * FROM all_users WHERE email = ${mysql.escape(userData.email)}`
    );

    await con.end();

    if (data.length === 0) {
      return res
        .status(400)
        .send({ error: "Incorrect email or password provided" })
        .end();
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        jwtSecret
      );

      return res
        .send({ id: data[0].id, message: "Logged in in succesufully", token })
        .end();
    }

    return res.status(400).send({ error: error.message }).end();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
