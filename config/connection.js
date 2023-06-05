'use strict'
require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
// const mongoURI = 'mongodb://127.0.0.1:27017/keyence';
// const mongoURI = process.env.MONGO_URI;
// const mongoURI = 'mongodb+srv://angelMC:dbMongo182!!@cluster0.gkk2awe.mongodb.net';
const mongoURI = 'mongodb+srv://angelMC:dbMongo182!!@cluster0.gkk2awe.mongodb.net/';


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;