import { Sequelize } from "sequelize";
import Mail from "../models/mailModel.js";
import MailType from "../models/mailTypeModel.js";
import Departament from "../models/departamentModel.js";
import Request from "../models/requestModel.js";
import Group from "../models/groupModel.js";

export const getAllMails = async (req, res) => {
    try {
        let response;
        response = await Mail.findAll({

            attributes: [
                'id',
                'user',
                'solicitante',
                [Sequelize.fn('date_format', Sequelize.col('dateSolicitud'), '%d-%m-%Y'), 'dateSolicitud'],
                [Sequelize.fn('date_format', Sequelize.col('dateInicial'), '%d-%m-%Y'), 'dateInicial'],
                [Sequelize.fn('date_format', Sequelize.col('dateFinal'), '%d-%m-%Y'), 'dateFinal'],
            ],
            include: [
                {
                    model: MailType,
                    attributes: ['id', 'tipo'],
                    required: true,
                },
                {
                    model: Departament,
                    attributes: ['id', 'departamento'],
                    required: true,
                },
                {
                    model: Request,
                    attributes: ['id', 'solicitud'],
                    required: true,
                },
                {
                    model: Group,
                    attributes: ['id', 'description'],
                    required: false,
                }
            ]

        });

        res.status(200).json(response);

    } catch (error) {
        res.json({ message: error.message });
    }

}
export const getAllGroupsMails = async (req, res) => {
    try {
        let response;
        response = await Mail.findAll({
            attributes: [
                'user',
            ],
            include: [
                {
                    model: Group,
                    attributes: ['id', 'email', 'description'],
                    required: true,
                }
            ]

        });
        console.table(response);
        res.status(200).json(response);

    } catch (error) {
        res.json({ message: error.message });
    }

}
export const getMail = async (req, res) => {
    try {
        const mail = await Mail.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!mail) return res.status(404).json({ msg: "Contenido no encontrado" });
        let response;

        response = await Mail.findOne({
            attributes: [
                'id',
                'user',
                'solicitante',
                'mailTypeId',
                'requestId',
                'groupId',
                'departamentId',
                [Sequelize.fn('date_format', Sequelize.col('dateInicial'), '%Y-%m-%d'), 'dateInicial'],
                [Sequelize.fn('date_format', Sequelize.col('dateFinal'), '%Y-%m-%d'), 'dateFinal'],
                [Sequelize.fn('date_format', Sequelize.col('dateSolicitud'), '%Y-%m-%d'), 'dateSolicitud'],
            ],
            where: {
                id: mail.id
            },
            include: [{
                model: MailType,
                attributes: ['tipo'],

                model: Departament,
                attributes: ['departamento'],

                model: Request,
                attributes: ['solicitante'],

                model: Group,
                attributes: ['description'],

            }]
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const createMail = async (req, res) => {
    try {
        const { user, solicitante, dateSolicitud, dateInicial, dateFinal, mailTypeId, requestId, departamentId, groupId } = req.body;

        if (dateFinal && groupId) {
            await Mail.create({
                user: user,
                solicitante: solicitante,
                dateSolicitud: dateSolicitud,
                dateInicial: dateInicial,
                dateFinal: dateFinal,
                mailTypeId: mailTypeId,
                requestId: requestId,
                departamentId: departamentId,
                groupId: groupId
            });
            res.status(201).json({ msg: "Mail Created Successfuly" });

        } else if (!dateFinal && !groupId) {
            await Mail.create({
                user: user,
                solicitante: solicitante,
                dateSolicitud: dateSolicitud,
                dateInicial: dateInicial,
                mailTypeId: mailTypeId,
                requestId: requestId,
                departamentId: departamentId,
            });
            res.status(201).json({ msg: "Mail Created Successfuly" });
        } else if (!groupId && dateFinal) {
            await Mail.create({
                user: user,
                solicitante: solicitante,
                dateSolicitud: dateSolicitud,
                dateInicial: dateInicial,
                dateFinal: dateFinal,
                mailTypeId: mailTypeId,
                requestId: requestId,
                departamentId: departamentId,

            });
            res.status(201).json({ msg: "Mail Created Successfuly" });
        } else if (!dateFinal && groupId) {
            await Mail.create({
                user: user,
                solicitante: solicitante,
                dateSolicitud: dateSolicitud,
                dateInicial: dateInicial,
                mailTypeId: mailTypeId,
                requestId: requestId,
                departamentId: departamentId,
                groupId: groupId
            });
            res.status(201).json({ msg: "Mail Created Successfuly" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}


export const updateMail = async (req, res) => {
    try {
        const mail = await Mail.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!mail) return res.status(404).json({ msg: "Data not found" });
        const { user, solicitante, dateSolicitud, dateInicial, dateFinal, mailTypeId, requestId, departamentId, groupId } = req.body;
        if (dateFinal && groupId) {

            await Mail.update({ user, solicitante, dateSolicitud, dateInicial, dateFinal, mailTypeId, requestId, departamentId, groupId }, {
                where: {
                    id: mail.id
                }
            });
            res.status(200).json({ msg: "Mail updated successfuly" });
        } else if (!dateFinal && !groupId) {
            await Mail.update({ user, solicitante, dateSolicitud, dateInicial, mailTypeId, requestId, departamentId }, {
                where: {
                    id: mail.id
                }
            });
            res.status(200).json({ msg: "Mail updated successfuly" });
        } else if (!groupId && dateFinal) {
            await Mail.update({ user, solicitante, dateSolicitud, dateInicial, dateFinal, mailTypeId, requestId, departamentId }, {
                where: {
                    id: mail.id
                }
            });
            res.status(200).json({ msg: "Mail updated successfuly" });
        } else if (!dateFinal && groupId) {
            await Mail.update({ user, solicitante, dateSolicitud, dateInicial, mailTypeId, requestId, departamentId, groupId }, {
                where: {
                    id: mail.id
                }
            });
            res.status(200).json({ msg: "Mail updated successfuly" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const deleteMail = async (req, res) => {
    try {
        const mail = await Mail.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!mail) return res.status(404).json({ msg: "Elemento no encontrado" })

        await mail.destroy({
            where: {
                id: mail.id
            }
        });

        res.status(200).json({ msg: "mail deleted successfuly" });
    } catch (error) {
        res.json({ message: error.message });
    }

}
