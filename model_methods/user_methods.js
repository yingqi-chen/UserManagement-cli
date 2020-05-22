const mongoose = require('mongoose')
const User = require('../model/user')

// create a user
const addUser = (user) =>{
   User.create(user).then(
       user=>{
           console.log(user),
           mongoose.disconnect()
       });
}

// list all users
const listAllUsers = () =>{
    User.find().then((users)=>{
        console.log("Totally there are " + users.length + " users.");
        console.log(users);
        mongoose.disconnect()
    })
}

// find one user
const findUserByEmail = (email) => {
    User.find({email},(err,docs)=>{
      if(err){
          console.log(err)
      }else{
          console.log(`Already found ${docs.length} matches.` )
          console.log(docs)
      }
      mongoose.disconnect()
    })
}


// update a user


// remove a user

module.exports = {
    addUser,
    listAllUsers,
    findUserByEmail
}