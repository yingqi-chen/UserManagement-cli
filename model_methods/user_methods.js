const mongoose = require('mongoose')
const User = require('../model/user')
mongoose.Promise = global.Promise;


// connect to DB
const db = mongoose.connect('mongodb://localhost:27017/myImportantDates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

// create a user
const addUser = (user) =>{
    let newUser = new User(user)
    newUser.save(function(err){
       console.log(newUser.errors)
       return;
    })
    console.log(newUser)
    mongoose.disconnect()

}//that means it get created but not connected to the db?????why????????



// list all users
const listAllUsers = () =>{
    User.find().then((users)=>{
        console.log("Totally there are " + users.length + " users.");
        console.log(users);
        mongoose.disconnect();
    }).then(()=>process.exit())
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


// update a user and make sure pass {new:true} option so that the doc in callback return the doc after updated
const updateUser = (email,user) => {
    User.findOneAndUpdate( { email }, user, { new: true }, (err,doc) =>{
      if(err){
          console.log(err);
          return
      }else{
          console.log(doc)
      }
      mongoose.disconnect()
    })
}


// remove a user
const deleteUser = email => {
   User.deleteOne( { email },(err,res) =>{
     if(err){
        console.log(err);
        return           
    }
       console.log("Deleted Successfully.");
       mongoose.disconnect()
       })

}



module.exports = {
    addUser,
    listAllUsers,
    findUserByEmail,
    updateUser,
    deleteUser
}

