const express = require('express');
const router= express.Router();
const builds = require('../data/builds')
//route to see all the builds
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
//route to see a specific build
router
    .route('/:id')
    .get((req, res) =>{
        let buildNumber = req.params.id
        let build = builds[(buildNumber-1)];
        console.log(build)
        res.render(
            'specificbuild',
            {
                build: build
            }
        )
    })
module.exports = router;