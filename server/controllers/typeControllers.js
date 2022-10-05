import MailType from '../models/mailTypeModel.js'

export const getAllMailTypes = async (req, res) => {
    try {
        let response;
        response = await MailType.findAll({
            attributes: ['id', 'tipo'],

        });
        console.table(response);
        res.status(200).json(response);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getMailType = async (req, res) => {
    try {
        const mailType = await MailType.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!mailType) return res.status(404).json({ msg: "Contenido no encontrado" });
        let response;

        response = await MailType.findOne({
            attributes: ['id', 'tipo'],
            where: {
                id: mailType.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createMailType = async (req, res) => {
    const { tipo } = req.body;
    try {
        await MailType.create({
            tipo: tipo
        });
        res.status(201).json({ msg: "MailType Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}


export const updateMailType = async (req, res) => {
    try {
        const mailType = await MailType.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!mailType) return res.status(404).json({ msg: "Data not found" });
        const { tipo } = req.body;

        await MailType.update({ tipo }, {
            where: {
                id: mailType.id
            }
        });

        res.status(200).json({ msg: "MailType updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const deleteMailType = async (req, res) => {
    try {
        const mailType = await MailType.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!mailType) return res.status(404).json({ msg: "Data not found" });
        await MailType.destroy({
            where: {
                id: mailType.id
            }
        });
        res.status(200).json({ msg: "MailType deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}
