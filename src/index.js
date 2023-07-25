const path = require('path');
const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const routes = require('./routes/index')
var cors = require('cors')
app.use(cors())

//use public folder as default folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use defined route in this express app
routes(app)


app.listen(port, () => console.log('learning app')); //start a web server


