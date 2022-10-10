import Request from '../models/requestModel.js'

export const getAllRequests = async (req, res) => {
    try {
        let response;
        response = await Request.findAll({
            attributes: ['id', 'solicitud'],

        });
        console.table(response);
        res.status(200).json(response);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Contenido no encontrado" });
        let response;

        response = await Request.findOne({
            attributes: ['id', 'solicitud'],
            where: {
                id: request.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createRequest = async (req, res) => {
    const { solicitud } = req.body;
    try {
        await Request.create({
            solicitud: solicitud
        });
        res.status(201).json({ msg: "Request Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}


export const updateRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const { solicitud } = req.body;

        await Request.update({ solicitud }, {
            where: {
                id: request.id
            }
        });

        res.status(200).json({ msg: "Request updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const deleteRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        await Request.destroy({
            where: {
                id: request.id
            }
        });
        res.status(200).json({ msg: "Request deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}
