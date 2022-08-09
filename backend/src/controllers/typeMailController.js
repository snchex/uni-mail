import MailTypeModel from '../models/mailTypeModel.js';

export const getAllMailTypes = async (req, res) => {

    try {

        const mailTypes = await MailTypeModel.findAll();
        res.json(mailTypes);
        
    } catch (error) {
        res.json({message: error.message});
    }

}

export const getMailType =  async (req, res) => {
    try {
        const mailType = await MailTypeModel.findAll({
            where:{ idmailType:req.params.id }
        });
        res.json(mailType[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}


export const createMailType = async (req, res) => {
    try {
        const mailType = await MailTypeModel.create(req.body);
        res.json({"message": "Tipo de correo creado correctamente"})
    } catch (error) {
    res.json({message: error.message});
    }
}


export const updateMailType = async (req, res) => {
    try {
        const mailType = await MailTypeModel.update(req.body, {
            where: { idmailType: req.params.id }
        });
        res.json({"message": "Tipo de correo actualizado correctamente"});

    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteMailType = async (req, res) => {
    try {
        await MailTypeModel.destroy({
            where: {idmailType: req.params.id}
        });
        res.json({"message": "Tipo de correo eliminado correctamente"});
    } catch (error) {
        res.json({message: error.message});        
    }
}
