const mongoose = require('mongoose');

// connect to DB
const db = mongoose.connect('mongodb://localhost:27017/myImportantDates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

// import User MODEL
const User = require('./model/user')

// mongoose.Promise = global.Promise;





