/**
 * Created by war3_2 on 2017/4/17.
 */
var mongoose  = require('mongoose');
DB_URL = 'mongodb://localhost:27017junedb';

mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to' + DB_URL);
})

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error:' + err);
})

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
})