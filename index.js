const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// connect to DB
const db = mongoose.connect('mongodb://localhost:27017/myImportantDates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

// import User MODEL
const User = require('./model/user')

// import user methods
const {addUser,listAllUsers,findUserByEmail,updateUser,deleteUser} = require('./model_methods/user_methods')

module.exports = db
// testing newly added methods
// const userOptions = {
//     name: "user3",
//     email: "email@ee.com",
//     password: "123"
// }

// const newUserOptions = {
//     name: "user4",
//     email: "email@ee.com",
//     password: "123"
// }

// let user = addUser(userOptions)
// // listAllUsers()
// // console.log(findUserByEmail("email@ee.com"))

// console.log(deleteUser("email@ee.com"))





