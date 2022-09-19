import { pool } from '../database/db.js'


export const getAllUsers = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM user');
        res.json(results);
    } catch (error) {
        res.json({ message: error.message });
    }
};


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
    try {
        console.log(req.body);
        const { email, fullname, superuser, password } = req.body;
        const newForm = { email, fullname, superuser, password };

        const [result] = await pool.query('INSERT INTO user set ?', [newForm]);

        res.json({ id: result.insertId, email, fullname, superuser, password});

    } catch (error) {
        res.json({ message: error.message });
    }

}



export const updateUser = async (req, res) => {
    try {
        const result = await pool.query('UPDATE user SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json(result);
        
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
        
    } catch (error) {
        res.json({ message: error.message })
    }
};
export const deleteUser = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM user WHERE id = ?', [req.params.id]);
        res.json({ "message": "Usuario eliminado correctamente" });
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

