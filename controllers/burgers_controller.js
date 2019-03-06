const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.selectAllDaBurgers(function(data) {
        const menu = {
            burgers: data 
        };
        res.render('index', menu);
    });
});

router.post('/api/burgers', function(req, res) {
    console.log(req.body.name)
    burger.addDaBurger(req.body.name, function(result) {
        console.log(result)
        res.json({id: result.insertId})
    });
});

router.put('/api/burgers/:id', function(req, res) {
    const id = {id: + req.params.id};

    burger.eatDaBurger(id, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;