const express = require('express');
const router = express.Router();
const { Departaments } = require('../models');

//All
router.get('/', async (req, res) => {
    try {

        const departaments = await Departaments.findAll();
        res.json(departaments);
        
    } catch (error) {
        res.json({message: error.message});
    }
});
//get specific

router.get('/:id', async (req, res) => {
    try {
        const departament = await Departaments.findAll({
            where:{ id:req.params.id }
        });
        res.json(departament[0]);
    } catch (error) {
        res.json({message: error.message});
    }
    
});

//Create

router.post('/', async (req, res) => {
    try {
        const departament = await Departaments.create(req.body);
        res.json({"message": "Type created successfully"});
    } catch (error) {
        res.json({"message": error.message});
    }


});


//update
router.put('/:id', async (req, res) => {

    try {
        const departaments = await Departaments.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({"message": "Tipo de correo actualizado correctamente"});

    } catch (error) {
        res.json({message: error.message})
    }


});


router.delete('/:id', async(req, res) => {
    try {
        await Departaments.destroy({
            where: {id: req.params.id}
        });
        res.json({"message": "Tipo de correo eliminado correctamente"});
    } catch (error) {
        res.json({message: error.message});        
    }
});

module.exports = router;