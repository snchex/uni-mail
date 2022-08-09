import mailModel from '../models/mailModel.js';


export const getAllMails = async (req, res) => {
    try {
        const mails = await mailModel.findAll();
        res.json(mails)
        
    } catch (error) {
        res.json({message: error.message});

    }
}

export const getMail = async (req, res) => {
    try {
        const mail = await mailModel.findAll({
            where: { id:req.params.id }
        });
        res.json(mail[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createMail = async (req, res) => {
    try {
        const mail = await mailModel.create(req.body);
        res.json({
            "message": "Correo creado correctamente",
        });
    } catch (error) {
        res.json({message: error.message});
    }
}



//Por si no funciona

export const updateMail = async (req, res) => {
    try {
        const mails = await mailModel.update(req.body, {
            where: { idmail: req.params.id },
        });
        res.json({ "message": "Correo creado correctamente" });
            } catch (err) {
                res.json({message: err.message});
            }
}




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
