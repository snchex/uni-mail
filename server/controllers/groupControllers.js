import { pool } from '../database/db.js'

export const getAllGroups = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT cluster.name, cluster.dateInicial, cluster.dateFinal, mail.user FROM cluster, mail ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getGroup = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT cluster.name, cluster.dateInicial, cluster.dateFinal, mail.user FROM cluster, mail WHERE id = ?', [req.params.id]);
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
        const { name, dateInicial, dateFinal, fk_idmail } = req.body;
        const newForm = { name, dateInicial, dateFinal, fk_idmail };

        const [result] = await pool.query('INSERT INTO cluster set ?', [newForm]);

        res.json({ id: result.insertId, name, dateInicial, dateFinal, fk_idmail});

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
