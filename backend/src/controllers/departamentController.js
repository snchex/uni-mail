import DepartamentModel from "../models/departamentModel";

export const getAllDepartament =  async (req, res) => {
    try {
        const departaments = await DepartamentModel.findAll();
        res.json(departaments);
    } catch (error) {
        res.json({message: error.message});
        
    }

}


export const getDepartament = async (req, res) => {
    try {
        const departament = await DepartamentModel.findAll({
            where: {iddepartament: req.params.id}
    
        });
        res.json(departament[0]);
    } catch (error) {
        res.json({message: error.message});
    }
    
}

export const createDepartament = async (req, res) => {
    try {
        const departament =  await DepartamentModel.create(req.body);
        res.json("message", "El departamento se creo correctamente"); 
    } catch (error) {

        res.json({message: error.message});
        
    }
}

export const updateDepartament = async (req, res) => {
    try {
        const departament = await DepartamentModel.update(req.body, {
            where: { iddepartament: req.params.id }
        });     
        res.json({ "message": "Departamento se ha Actualizado correctamente"});
        
    } catch (error) {
        res.json({message: error.message});       
    }
}


export const deleteDepartament = async (req, res) => {
    try {
        const departament= await DepartamentModel.destroy({
            where: { iddepartament: req.params.id}
        });
        res.json({ "message": "Departamento se ha eliminado correctamente"})
    } catch (error) {

        res.json({message: error.message});       
    }
}