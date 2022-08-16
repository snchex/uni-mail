import { pool } from '../database/db.js'

export const getAllDepartaments = async (req, res) => {
    try{
        const [results] = await pool.query('SELECT * FROM departament ORDER BY createdAt ASC')
        res.json(results);

    } catch (error) {
        res.json({message: error.message});
    }

}

export const getDepartament =  async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM departament WHERE iddepartament = ?', [req.params.id]);
        if (result === 0){
            return res.status(404).json({mesage: "Elemento no encontrado"})
        }
        res.json({result});
        
    } catch (error) {
        res.json({message: error.message});
    }   
}


export const createDepartament = async (req, res) => {
    try {
        console.log(req.body);
        const { departament } = req.body;
        const newForm = {departament};
    
        const [result] = await pool.query('INSERT INTO departament set ?', [newForm]);
        res.json({"message": "Departanment created successfully"});
        res.json({id: result.insertId, departament });
        
    } catch (error) {
        res.json({message: error.message});
    }

}


export const updateDepartament = async (req, res) => {
    try {
        const result = await pool.query('UPDATE departament SET ? WHERE iddepartament = ?', [req.body, req.params.id]);
        res.json(result);
        res.json({"message": "Departament actualizado correctamente"})
         if (result === 0){
          return res.status(404).json({mesage: "Elemento no encontrado"})
          }
        
    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteDepartament = async (req, res) => {
    try {
        const  [result] = await pool.query('DELETE FROM departament WHERE departament = ?', [req.params.id]);
        res.json({"message": "Tipo de correo eliminado correctamente"});
        if (result === 0){
            return res.status(404).json({mesage: "Elemento no encontrado"})
        }
    } catch (error) {
        res.json({message: error.message});
    }
    
}
