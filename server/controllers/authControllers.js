import { pool } from '../database/db.js'
import argon2 from 'argon2';

export const getAllUsers = async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM user ORDER BY createdAt ASC')
    res.json(results);

  } catch (error) {
    res.json({ message: error.message });
  }

}

export const getUser = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM user WHERE id = ?', [req.params.id]);
    if (result === 0) {
      return res.status(404).json({ message: "Elemento no encontrado" })
    }
    res.json(result[0]);

  } catch (error) {
    res.json({ message: error.message });
  }
}


export const createUser = async (req, res) => {
 
  const {username, email, password, confirmPassword, role} = req.body;

    if(password !== confirmPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);
    console.table(hashPassword)
    try {
        const newForm = {
          username,
          email,
          password: hashPassword,
          role,
        };
        const [result] = await pool.query('INSERT INTO user set ?', [newForm]);

        res.json({ id: result.insertId, username, email, password, role  });
        res.status(201).json({msg: "Registro Correcto"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}


export const updateUser = async (req, res) => {
  try {
    const result = await pool.query('UPDATE user SET ? WHERE id = ?', [req.body, req.params.id]);
    
    let hashPassword;
    if(password === "" || password === null){
      hashPassword = user.password
      res.json({ id: result.insertId, departamento });
    }else{
      hashPassword = await argon2.hash(password);
    }

  } catch (error) {
    res.json({ message: error.message })
  }
}


export const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM user WHERE id = ?', [req.params.id]);

    if (result === 0) {
      return res.status(404).json({ mesage: "Elemento no encontrado" })
    }
  } catch (error) {
    res.json({ message: error.message });
  }

}
