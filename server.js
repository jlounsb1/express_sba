const express = require('express');
const app = express();
const port = 3000;
const error = require('./utilities/error');
const bodyParser = require('body-parser');
const pug = require('pug');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
const logReq = function(req, res, next) {
    console.log('you did something')
    next();
}
app.use(logReq)
app.use(express.static('styles'))

app.set("views", "./views");
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(
        'index'
    )
})



app.use((req, res, next) =>{
    next(error(404, 'You done goofed! This does not exist.'))
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
})

app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`)
})