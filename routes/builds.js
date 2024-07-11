const express = require('express');
const router= express.Router();

const builds = require('../data/builds')
const error = require("../utilities/error");

router
    .route('/')
    .get((req, res)=>{
        res.json(builds)
    })

module.exports = router;