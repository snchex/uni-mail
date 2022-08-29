import { pool } from '../database/db.js'

export const getAllGroups = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM cluster ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getGroup = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cluster WHERE id = ?', [req.params.id]);
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
        const { responsible, member, name } = req.body;
        const newForm = { responsible, member, name };

        const [result] = await pool.query('INSERT INTO cluster set ?', [newForm]);

        res.json({ id: result.insertId, responsible, member, name });

    } catch (error) {
        res.json({ message: error.message });
    }

}


export const updateGroup = async (req, res) => {
    try {
        const result = await pool.query('UPDATE cluster SET ? WHERE id = ?', [req.body, req.params.id]);
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
        const [result] = await pool.query('DELETE FROM cluster WHERE id = ?', [req.params.id]);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
    } catch (error) {
        res.json({ message: error.message });
    }

}
