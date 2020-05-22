const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// connect to DB
const db = mongoose.connect('mongodb://localhost:27017/myImportantDates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

// import User MODEL
const User = require('./model/user')

// import user methods
const {addUser,listAllUsers} = require('./model_methods/user_methods')

// testing newly added methods
const newUser = addUser("li si",db)
listAllUsers()





