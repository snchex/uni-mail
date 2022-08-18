import { pool } from '../database/db.js'

export const getAllGroups = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM group ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getGroup = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM group WHERE id = ?', [req.params.id]);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
        res.json(result[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
}


export const createGroup = async (req, res) => {
    try {
        console.log(req.body);
        const { responsible } = req.body;
        const newForm = { responsible };

        const [result] = await pool.query('INSERT INTO group set ?', [newForm]);

        res.json({ id: result.insertId, responsible });

    } catch (error) {
        res.json({ message: error.message });
    }

}


export const updateGroup = async (req, res) => {
    try {
        const result = await pool.query('UPDATE group SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json(result);

        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const deleteGroup = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM group WHERE id = ?', [req.params.id]);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
    } catch (error) {
        res.json({ message: error.message });
    }

}
