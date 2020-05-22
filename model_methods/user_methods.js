const mongoose = require('mongoose')
const User = require('../model/user')

const addUser = (name) =>{
   User.create({name: name}).then(
       user=>{
           console.log(user),
           mongoose.disconnect()
       });
}

const listAllUsers = () =>{
    User.find().then((users)=>{
        console.log("Totally there are " + users.length + " users.");
        console.log(users);
        mongoose.disconnect()
    })
}

module.exports = {
    addUser,
    listAllUsers
}