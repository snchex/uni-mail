import { pool } from '../database/db.js'

export const getAllMails = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM mail ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getMail = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM mail WHERE id = ?', [req.params.id]);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
        res.json(result[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
}


export const createMail = async (req, res) => {
    try {
        console.log(req.body);
        const { user, password, statu, fk_idtypeMail, fk_idrequest, fk_iddepartament, fk_idgroup } = req.body;
        const newForm = {
            user,
            password,
            statu,
            fk_idtypeMail,
            fk_idrequest,
            fk_iddepartament,
            fk_idgroup
        };

        const [result] = await pool.query('INSERT INTO mail set ?', [newForm]);

        res.json({ id: result.insertId, user, password, statu, fk_idtypeMail, fk_idrequest, fk_iddepartament, fk_idgroup });

    } catch (error) {
        res.json({ message: error.message });
    }

}


export const updateMail = async (req, res) => {
    try {
        const result = await pool.query('UPDATE mail SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json(result);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const deleteMail = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM mail WHERE id = ?', [req.params.id]);
        res.json({ "message": "Correo eliminado correctamente" });
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
    } catch (error) {
        res.json({ message: error.message });
    }

}
