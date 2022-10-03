import { pool } from '../database/db.js'

export const getAllDepartaments = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM departament ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getDepartament = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM departament WHERE id = ?', [req.params.id]);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
        res.json(result[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
}


export const createDepartament = async (req, res) => {
    try {
        console.log(req.body);
        const { departamento } = req.body;
        const newForm = { departamento };

        const [result] = await pool.query('INSERT INTO departament set ?', [newForm]);

        res.json({ id: result.insertId, departamento });

    } catch (error) {
        res.json({ message: error.message });
    }

}


export const updateDepartament = async (req, res) => {
    try {
        const result = await pool.query('UPDATE departament SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json(result);

        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const deleteDepartament = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM departament WHERE id = ?', [req.params.id]);
        res.json({ "message": "Tipo de correo eliminado correctamente" });
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}
