const express = require('express');
const router= express.Router();
const players = require('../data/players')
//route to see all the players registered
router
    .route('/')
    .get((req, res)=>{
        let playersList = players;
        res.render(
            'players',
            {
                players: playersList
            }
        )   
    })
//route to see a specific player
router
    .route('/:userId')
    .get((req, res) =>{
        console.log(req.params)
        let playerNumber = req.params.userId
        let player = players[(playerNumber-1)];
        console.log(player)
        res.render(
            'specificplayer',
            {
                player: player
            }
        )
    })
module.exports = router;