import RequestModel from '../models/requestModel.js';

export const getAllRequest = async (req, res) => {
    try {
        const requests = await RequestModel.findAll();
        res.json(requests);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getRequest = async (req, res) => {
    try {
        const request = await RequestModel.find({
            where: {idrequest: req.params.id}
        });
        request.json(request[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createRequest = async (req, res) => {
    try {
        const request = await RequestModel.create(req.body);
        request.json({"message": "Request created successfully"});
    } catch (error) {
        res.json({message: error.message});
        
    }
}


export const updateRequest = async (req, res) => {
    try {
        const request = await RequestModel.update(req.body, {
            where: {idrequest: req.params.id}
        });
        res.json({"message": "Request update successfully"})
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteRequest = async (req, res) => {
    try {
        const request = await RequestModel.destroy({
            where: {idrequest: req.params.id}
        });
        request.json({"message": "Request delete successfully"})
    } catch (error) {
        res.json({message: error.message});
        
    }
}