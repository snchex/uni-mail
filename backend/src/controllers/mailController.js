import mailModel from '../models/mailModel.js';


export const getAllMail = async (req, ress) => {
    try {
        const mails = await mailModel.findAll();
        ress.json(mails)
        
    } catch (err) {
        res.json({message: err.message});

    }
}

export const getMail = async (req, res) => {
    try {
        const mails = await mailModel.findAll({
            where: { id:req.params.id}
        })
    } catch (err) {
        res.json({message: err.message});
    }
}

export const createMail = async (req, res) => {
    try {
        const mails = await mailModel.create(req.body);
        res.json({
            "message": "Correo creado correctamente",
        });
    } catch (err) {
        res.json({message: err.message});
    }
}


export const updateMail = async (req, res) => {
    try {
        const mails = await mailModel.update(req.params.id, req.body);
        res.json({ "message": "Correo actualizado correctamente" });
            } catch (err) {
                res.json({message: err.message});
            }
}


//Por si no funciona
/*
export const updateMail = async (req, res) => {
    try {
        const mails = await mailModel.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({ "message": "Correo creado correctamente" });
            } catch (err) {
                res.json({message: err.message});
            }
}
*/



export const deleteMail = async (req, res) => {
    try {
        const mails = await mailModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ "message": "Correo eliminado correctamente", });
    } catch (err) {
        res.json({message: err.message});
    }

}
