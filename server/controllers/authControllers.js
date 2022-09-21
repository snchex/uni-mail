import express from "express";
import { pool } from '../database/db.js'
import { validateToken } from "../middlewares/AuthMiddleware.js";
import bcrypt from "bcrypt";
import pkg from 'jsonwebtoken';
const { sign } = pkg;
const router = express.Router();


export const register = async (req, res) => {

  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) {
    const user = rows[0];
    const validPassword = await helpers.matchPassword(password, user.password);
    if (validPassword) {
      res.json("SUCCESS");
    } else {
      res.json({ error: "Wrong Username And Password Combination" });
    }

  } else {
    res.json({ error: "User Doesn't Exist" });;
  }
  const accessToken = sign(
    { username: user.username, id: user.id },
    "importantsecret"
  );
  res.json({ token: accessToken, username: username, id: user.id });

};


router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(basicInfo);
});
/*
router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await Users.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      Users.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("SUCCESS");
    });
  });
});*/

export default router;
