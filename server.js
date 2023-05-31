const express = require('express');

//Import connection to database
const db = require('./config/connection');

//Import Routes
//const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes);

//Start connection to DB and server
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connection to DB successfull');
    app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`));
});
