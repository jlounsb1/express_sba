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
    }).delete((req, res) => {
        let buildNumber = req.params.id
        let build = builds[(buildNumber-1)];
        console.log(`received a delete request for build ${req.params.id}, ${build.name}.`)
        res.send(`received a delete request for build ${req.params.id}, ${build.name}.`)
        //I can get this to register in my API tracking extension, thunder Client, but I can't get the button to work in Pug.
    }).put((req, res)=>{
        let buildNumber = req.params.id
        let build = builds[(buildNumber-1)];
        console.log(`recieved a put request to update build ${req.params.id}, ${build.name}.`)
        res.send(`received a put request for build ${req.params.id}, ${build.name}.`)
        //I am having the same problem as the delete request with the put
    });
    
    
module.exports = router;