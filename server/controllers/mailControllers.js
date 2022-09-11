import { pool } from '../database/db.js'

export const getAllMails = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT user, solicitante, date_format(dateSolicitud, "%d-%m-%Y") AS dateSolicitud, date_format(dateInicial, "%d-%m-%Y") AS dateInicial, date_format(dateFinal, "%d-%m-%Y") AS dateFinal, statu, tipo, solicitud, departamento FROM mail, mailType, departament, request WHERE mailType.id = mail.fk_idtypeMail AND departament.id = mail.fk_iddepartament AND request.id = mail.fk_idrequest ORDER BY mail.createdAt DESC')
        res.json(results);

    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getMail = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT user, solicitante, date_format(dateSolicitud, "%Y-%m-%d") AS dateSolicitud, date_format(dateInicial, "%Y-%m-%d") AS dateInicial, date_format(dateFinal, "%Y-%m-%d") AS dateFinal, statu, tipo, solicitud, departamento FROM mail, mailType, departament, request WHERE mailType.id = mail.fk_idtypeMail AND departament.id = mail.fk_iddepartament AND request.id = mail.fk_idrequest AND mail.id = ?', [req.params.id]);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
        res.json(result[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
}


export const createMail = async (req, res) => {
    try {
        console.log(req.body);
        const { user, solicitante, dateSolicitud, dateInicial, statu, dateFinal, fk_idtypeMail, fk_idrequest, fk_iddepartament } = req.body;
        const newForm = {
            user,
            solicitante,
            dateSolicitud,
            dateInicial,
            dateFinal,
            statu,
            fk_idtypeMail,
            fk_idrequest,
            fk_iddepartament,

        };

        const [result] = await pool.query('INSERT INTO mail set ?', [newForm]);

        res.json({ id: result.insertId, user, solicitante, dateSolicitud, dateInicial, dateFinal, statu, fk_idtypeMail, fk_idrequest, fk_iddepartament });

    } catch (error) {
        res.json({ message: error.message });
    }

}


export const updateMail = async (req, res) => {
    try {
        const result = await pool.query('UPDATE mail SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json(result);
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const deleteMail = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM mail WHERE id = ?', [req.params.id]);
        res.json({ "message": "Correo eliminado correctamente" });
        if (result === 0) {
            return res.status(404).json({ message: "Elemento no encontrado" })
        }
    } catch (error) {
        res.json({ message: error.message });
    }

}
