import { pool } from '../database/db.js'

export const getAllGroups = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT id, name, date_format(dateInicial, "%d-%m-%Y") AS dateInicial, date_format(dateFinal, "%d-%m-%Y") AS dateFinal FROM cluster ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getGroup = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT id, name, date_format(dateInicial, "%Y-%m-%d") AS dateInicial, date_format(dateFinal, "%Y-%m-%d") AS dateFinal FROM cluster WHERE id = ?', [req.params.id]);
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
        const { name, dateInicial, dateFinal } = req.body;
        if (dateFinal === "") {

            const newForm = { name, dateInicial };
            const [result] = await pool.query('INSERT INTO cluster set ?', [newForm]);
            res.json({ id: result.insertId, name, dateInicial });

        }else {

            const newForm = { name, dateInicial, dateFinal };
            const [result] = await pool.query('INSERT INTO cluster set ?', [newForm]);
            res.json({ id: result.insertId, name, dateInicial, dateFinal });
        }

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
