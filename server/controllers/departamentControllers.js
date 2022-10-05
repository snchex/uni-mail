import Departament from '../models/departamentModel.js'

export const getAllDepartaments = async (req, res) => {
    try {
        let response;
        response = await Departament.findAll({
            attributes: ['id', 'departamento'],

        });
        console.table(response);
        res.status(200).json(response);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getDepartament = async (req, res) => {
    try {
        const departament = await Departament.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!departament) return res.status(404).json({ msg: "Contenido no encontrado" });
        let response;

        response = await Departament.findOne({
            attributes: ['id', 'departamento'],
            where: {
                id: departament.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createDepartament = async (req, res) => {
    const { departamento } = req.body;
    try {
        await Departament.create({
            departamento: departamento
        });
        res.status(201).json({ msg: "Departament Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}


export const updateDepartament = async (req, res) => {
    try {
        const departament = await Departament.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!departament) return res.status(404).json({ msg: "Data not found" });
        const { departamento } = req.body;

        await Departament.update({ departamento }, {
            where: {
                id: departament.id
            }
        });

        res.status(200).json({ msg: "Departament updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const deleteDepartament = async (req, res) => {
    try {
        const departament = await Departament.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!departament) return res.status(404).json({ msg: "Data not found" });
        await Departament.destroy({
            where: {
                id: departament.id
            }
        });
        res.status(200).json({ msg: "Departament deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}
