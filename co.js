const { program } = require('commander');
const {addUser,listAllUsers,findUserByEmail,updateUser,deleteUser} = require('./model_methods/user_methods')
const inquirer = require('inquirer')
const db = require('./index')

const questions = [
    {
      type: 'input',
      name: 'email',
      message: 'user email'
    },
    {
      type: 'input',
      name: 'name',
      message: 'user name'
    },
    {
      type: 'input',
      name: 'password',
      message: 'user password'
    },
  ];


program
.version('0.0.1')
.description("testing");


program
    .command('list')
    .alias('l')
    .description('List all users')
    .action(()=>listAllUsers())

program
   .command('add')
   .alias('a')
   .description('Add a user')
   .action(
    inquirer.prompt(questions)
    .then( answers => {
       console.info(answers)
     })
     .catch(err =>{
       console.log(error) 
     })
   )


program.parse(process.argv)

// const userOptions = {
//     name: "user1",
//     email: "email@ee.com",
//     password: "123"
// }

// const newUserOptions = {
//     name: "user5",
//     email: "email@ee.com",
//     password: "123"
// }

// let user = addUser(userOptions)
// console.log(user)

// listAllUsers()


  

