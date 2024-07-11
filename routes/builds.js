const express = require('express');
const router= express.Router();
const builds = require('../data/builds')

router
    .route('/')
    .get((req, res)=>{
        let buildsList = builds;
        // console.log(buildsList)
        res.render(
            'builds',
            {
                builds: buildsList
            }
            // {
            //     name: buildsList[0].name,
            //     purpose: buildsList[0].Purpose,
            //     style: buildsList[0].Style

            // }
        )   
    })

module.exports = router;