const express = require('express');
const router= express.Router();
const builds = require('../data/builds');
const players = require('../data/players');


router
    .route('/')
    .get((req, res)=>{
        res.render(
            'submit'
            
        )
           
    })
    .post((req, res) =>{
        res.json({
            test: 'reponse'
        })
    })
module.exports = router;