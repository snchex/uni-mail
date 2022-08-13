import { pool } from '../database/db.js'

export const getAllMailTypes = async (req, res) => {
    try{
        const [results] = await pool.query('SELECT * FROM mailType ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({message: error.message});
    }

}

export const getMailType =  async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM mailType WHERE idmailType = ?', [req.params.id]);
        if (result === 0){
            return res.status(404).json({mesage: "Elemento no encontrado"})
        }
        res.json({result});
        
    } catch (error) {
        res.json({message: error.message});
    }
}


export const createMailType = async (req, res) => {
    try {
        console.log(req.body);
        const { tipo } = req.body;
        const newForm = {tipo};
    
        const [result] = await pool.query('INSERT INTO mailType set ?', [newForm]);
        res.json({"message": "Type created successfully"});
        res.json({id: result.insertId, tipo});
        
    } catch (error) {
        res.json({message: error.message});
    }

}


export const updateMailType = async (req, res) => {
    try {
        const result = await pool.query('UPDATE mailType SET ? WHERE idmailType = ?', [req.body, req.params.id]);
        res.json(result);
        res.json({"message": "Tipo de correo actualizado correctamente"})
         if (result === 0){
          return res.status(404).json({mesage: "Elemento no encontrado"})
          }
        
    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteMailType = async (req, res) => {
    try {
        const  [result] = await pool.query('DELETE FROM mailType WHERE idmailType = ?', [req.params.id]);
        res.json({"message": "Tipo de correo eliminado correctamente"});
        if (result === 0){
            return res.status(404).json({mesage: "Elemento no encontrado"})
        }
    } catch (error) {
        res.json({message: error.message});
    }
    
}
