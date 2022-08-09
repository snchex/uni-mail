import GroupModel from "../models/groupModel";

export const getAllGroups = async (req, res) => {
    try {
        const groups = await GroupModel.findAll();
        res.json(groups);

    } catch (error) {
        res.json({ message: error.message});
    }
}

export const getGroup = async (req, res) => {
    try {
        const group =  await GroupModel.findById({
            where: { idgroup: req.params.id}
        });
        res.json(group[0]);
    } catch (error) {
        res.json({ message: error.message});
    }
}

export const createGroup = async (req, res) => {
    try {
        const group = await GroupModel.create(req.body);
        res.json({"message": "Grupo creado correctamente"});
    } catch (error) {
        res.json({ message: error.message});
    }
}

export const updateGroup = async (req, res) => {
    try {
        const group = await GroupModel.update(req.body,
            { where: { idgroup: req.params.id }});
        res.json({"message": "Grupo actualizado"})
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteGroup = async (req, res) => {
    try {
        const group = await GroupModel.destroy({
            where: { idgroup: req.params.id }
        });
        res.json({"message": "Grupo eliminado correctamente"});
    } catch (error) {
        res.json({message: error.message});
    }
}