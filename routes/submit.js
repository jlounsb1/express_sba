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

module.exports = router;