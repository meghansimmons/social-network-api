const { connect, connection } = require('mongoose');

//connect to mongo db and create socialDB database
connect('mongodb://127.0.0.1:27017/socialDB');

module.exports = connection;
