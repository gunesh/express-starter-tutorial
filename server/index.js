const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

let EventEmitter = require('events');


global.config = require('../config/config').getConfiguration();

global.events = new EventEmitter();

const app = express();

// Set up Global configuration access
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

events.on('notify', function (data) {
    console.log('notify===>', data);
});


let routes = require('./routes');
routes(app);


app.listen(5000, '127.0.0.1', () => {
    let message = `API Server is successfully running at : http://127.0.0.1:5000`;
    console.log(message);
});

