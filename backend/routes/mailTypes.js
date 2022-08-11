const express = require('express');
const router = express.Router();
const { MailTypes } = require('../models');



router.get('/', (req, res) => {
    res.json("Hello World");
});

router.post('/', async (req, res) => {
    try {
        const type = await MailTypes.create(req.body);
        res.json({"message": "Request created successfully"});
    } catch (error) {
        res.json({message: error.message});
        
    }
});

module.exports = router;


