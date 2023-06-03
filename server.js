require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');



//Import connection to database
const db = require('./config/connection');

//Import Routes
const routes = require('./routes')

const PORT = process.env.PORT || 8081;
const app = express();

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 10_600_000,
    },
};
app.use(cors());
app.use(session(sess));

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Start connection to DB and server
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connection to DB successfull');
    app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`));
});
