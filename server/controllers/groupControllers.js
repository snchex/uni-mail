import { pool } from '../database/db.js'

export const getAllGroups = async (req, res) => {
    try{
        const [results] = await pool.query('SELECT * FROM group ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({message: error.message});
    }

}

export const getGroup =  async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM group WHERE idgroup = ?', [req.params.id]);
        if (result === 0){
            return res.status(404).json({mesage: "Elemento no encontrado"})
        }
        res.json({result});
        
    } catch (error) {
        res.json({message: error.message});
    }
}


export const createGroup = async (req, res) => {
    try {
        console.log(req.body);
        const { responsible } = req.body;
        const newForm = {responsible};
    
        const [result] = await pool.query('INSERT INTO group set ?', [newForm]);
        res.json({"message": "Group created successfully"});
        res.json({id: result.insertId, responsible});
        
    } catch (error) {
        res.json({message: error.message});
    }

}


export const updateGroup = async (req, res) => {
    try {
        const result = await pool.query('UPDATE group SET ? WHERE idgroup = ?', [req.body, req.params.id]);
        res.json(result);
        res.json({"message": "Grupo actualizado correctamente"})
         if (result === 0){
          return res.status(404).json({mesage: "Elemento no encontrado"})
          }
        
    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteGroup = async (req, res) => {
    try {
        const  [result] = await pool.query('DELETE FROM group WHERE idgroup = ?', [req.params.id]);
        res.json({"message": "Grupo eliminado correctamente"});
        if (result === 0){
            return res.status(404).json({mesage: "Elemento no encontrado"})
        }
    } catch (error) {
        res.json({message: error.message});
    }
    
}
