const express = require('express');
const router = express.Router();
const { MailTypes } = require('../models');

//All
router.get('/', async (req, res) => {
    try {

        const mailTypes = await MailTypes.findAll();
        res.json(mailTypes);
        
    } catch (error) {
        res.json({message: error.message});
    }
});
//get specific

router.get('/:id', async (req, res) => {
    try {
        const mailType = await MailTypes.findAll({
            where:{ id:req.params.id }
        });
        res.json(mailType[0]);
    } catch (error) {
        res.json({message: error.message});
    }
    
});

//Create

router.post('/', async (req, res) => {
    try {
        const type = await MailTypes.create(req.body);
        res.json({"message": "Type created successfully"});
    } catch (error) {
        res.json({"message": error.message});
    }


});


//update
router.put('/:id', async (req, res) => {

    try {
        const mailType = await MailTypes.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({"message": "Tipo de correo actualizado correctamente"});

    } catch (error) {
        res.json({message: error.message})
    }


});


router.delete('/:id', async(req, res) => {
    try {
        await MailTypes.destroy({
            where: {id: req.params.id}
        });
        res.json({"message": "Tipo de correo eliminado correctamente"});
    } catch (error) {
        res.json({message: error.message});        
    }
});

module.exports = router;