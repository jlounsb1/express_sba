const express = require('express');
const app = express();
const port = 3000;
const error = require('./utilities/error');
const bodyParser = require('body-parser');
const pug = require('pug');
const fs = require('fs');
//all my global variables including

//middleware so bodyparser works
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//loads stylesheet capabilities and logs simple response middleware pulled from a previous exercise
app.use(express.static('styles'))
app.use((req, res, next) => {
    const time = new Date();
  
    console.log(
      `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
  });

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