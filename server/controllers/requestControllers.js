import { pool } from '../database/db.js'

export const getAllRequests = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM request ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getRequest = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM request WHERE id = ?', [req.params.id]);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
        res.json(result[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
}


export const createRequest = async (req, res) => {
    try {
        console.log(req.body);
        const { solicitud } = req.body;
        const newForm = { solicitud };

        const [result] = await pool.query('INSERT INTO request set ?', [newForm]);

        res.json({ id: result.insertId, solicitud });

    } catch (error) {
        res.json({ message: error.message });
    }

}


export const updateRequest = async (req, res) => {
    try {
        const result = await pool.query('UPDATE request SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json(result);

        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const deleteRequest = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM request WHERE id = ?', [req.params.id]);

        if (result === 0) {
            return res.status(404).json({ mesage: "Elemento no encontrado" })
        }
    } catch (error) {
        res.json({ message: error.message });
    }

}
