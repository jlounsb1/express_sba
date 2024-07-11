const express = require('express');
const router= express.Router();
const builds = require('../data/builds')

router
    .route('/')
    .get((req, res)=>{
        res.render(
            'builds',
            {buildsinfo: builds}
        )   
    })

module.exports = router;