import { Sequelize } from "sequelize";

import Group from "../models/groupModel.js";

export const getAllGroups = async (req, res) => {
    try {
        let response;
        response = await Group.findAll({
            attributes: [
                'id',
                'email',
                'description',
                [Sequelize.fn('date_format', Sequelize.col('dateInicialG'), '%d-%m-%Y'), 'dateInicialG'],
                [Sequelize.fn('date_format', Sequelize.col('dateFinalG'), '%d-%m-%Y'), 'dateFinalG'],],
        });
        console.table(response);
        res.status(200).json(response);

    } catch (error) {
        res.json({ message: error.message });
    }

}


export const getGroup = async (req, res) => {
    try {
        const group = await Group.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!group) return res.status(404).json({ msg: "Contenido no encontrado" });
        let response;

        response = await Group.findOne({
            attributes: [
                'id',
                'email',
                'description',
                [Sequelize.fn('date_format', Sequelize.col('dateInicialG'), '%Y-%m-%d'), 'dateInicialG'],
                [Sequelize.fn('date_format', Sequelize.col('dateFinalG'), '%Y-%m-%d'), 'dateFinalG'],
            ],
            where: {
                id: group.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const createGroup = async (req, res) => {
    try {
        const { email, description, dateInicialG, dateFinalG } = req.body;
        if (dateFinalG) {
            await Group.create({
                email: email,
                description: description,
                dateInicialG: dateInicialG,
                dateFinalG: dateFinalG,
            });
            res.status(201).json({ msg: "Group Created Successfuly" });

        } else {

            await Group.create({
                email: email,
                description: description,
                dateInicialG: dateInicialG,

            });
            res.status(201).json({ msg: "Group Created Successfuly" });
        }

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}


export const updateGroup = async (req, res) => {
    try {
        const group = await Group.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!group) return res.status(404).json({ msg: "Data not found" });
        const { email, description, dateInicialG, dateFinalG } = req.body;
        if (dateFinalG) {

            await Group.update({ email, description, dateInicialG, dateFinalG }, {
                where: {
                    id: group.id
                }
            });
        } else {

            await Group.update({ email, description, dateInicialG }, {
                where: {
                    id: group.id
                }
            });
        }

        res.status(200).json({ msg: "group updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const deleteGroup = async (req, res) => {
    try {
        const group = await Group.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!group) return res.status(404).json({ msg: "Data not found" });
        await Group.destroy({
            where: {
                id: group.id
            }
        });
        res.status(200).json({ msg: "Group deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }


}
