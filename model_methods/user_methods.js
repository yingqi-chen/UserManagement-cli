const mongoose = require('mongoose')
const User = require('../model/user')

const addUser = (name) =>{
   User.create({name: name}).then(
       user=>{
           console.log(user),
           mongoose.disconnect()
       });
}

module.exports = {
    addUser
}