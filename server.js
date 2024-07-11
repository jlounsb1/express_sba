const express = require('express');
const app = express();
const port = 3000;
const error = require('./utilities/error');
const bodyParser = require('body-parser');
const pug = require('pug');
const fs = require('fs');
const logReq = function(req, res, next) {
    console.log('you did something')
    next();
}
//all my global variables including requirements and middleware logging function

//middleware so bodyparser works
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//loads stylesheet capabilities and logs simple response middleware
app.use(logReq)
app.use(express.static('styles'))

//needed for pug to work
app.set("views", "./views");
app.set('view engine', 'pug');

//basic home page loads pug index view
app.get('/', (req, res) => {
    res.render(
        'index'
    )
})


//error handling middleware that does a simple 404
app.use((req, res, next) =>{
    next(error(404, 'You done goofed! This does not exist.'))
})

//error handling middleware that pulls status code
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
})


app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`)
})