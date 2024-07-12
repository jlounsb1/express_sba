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
        console.log(req.body)
        res.json({
            "Id": builds.length +1,
            "name": req.body.buildname,
            "Purpose": req.body.purpose,
            "Style": req.body.style,
            "gear": req.body.gear,
            "comments": req.body.comments
        })
    })
module.exports = router;