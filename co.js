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
   .action(()=>{
    inquirer.prompt(questions)
    .then( answers => {
       addUser(answers)
     }).then(() => {
       process.exit()
     })
     .catch(err =>{
       console.log(error) 
     })
    })

program
  .command('find <email>')
  .alias('f')
  .description('find a user through email')
  .action((email)=>{
     findUserByEmail(email)
  })

  


program.parse(process.argv)




  

