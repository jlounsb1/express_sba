const express = require('express');
const router= express.Router();
const builds = require('../data/builds')

router
    .route('/')
    .get((req, res)=>{
        let buildsList = builds;
        res.render(
            'builds',
            {
                builds: buildsList
            }
        )   
    })

module.exports = router;