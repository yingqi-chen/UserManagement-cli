const mongoose = require('mongoose')
const User = require('../model/user')


// connect to DB
mongoose.connect('mongodb://localhost:27017/myImportantDates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

// create a user
const addUser = async (user) =>{
    let newUser = new User(user)
    try{
        result = await newUser.save()
        console.log(result);
        mongoose.disconnect();
    }catch(err){
        console.log(err)
    }

}




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
    console.log(user)
    User.updateOne( { email }, user, { new: true }, (err,doc) =>{
      if(err) console.log(err);
      else{
          console.log(doc)
          mongoose.disconnect()
      }
      
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

