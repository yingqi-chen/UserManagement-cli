const { program } = require('commander');
const {addUser,listAllUsers,findUserByEmail,updateUser,deleteUser} = require('./model_methods/user_methods')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'user name'
  },
    {
      type: 'input',
      name: 'email',
      message: 'user email'
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
     })
     .catch(err =>{
       console.log(error) 
     })
    })

program
  .command('find <email>')
  .alias('f')
  .description('Find a user through email')
  .action((email)=>{
     findUserByEmail(email)
  })

program
  .command('update <email>')
  .alias('u')
  .description('Update a user through email')
  .action((email)=>{
    inquirer.prompt(questions)
    .then( answers  => {
       updateUser(email, answers)
     })
     .catch(err =>{
       console.log(error) 
     })
    })

program
  .command('delete <email>')
  .alias('d')
  .description('Delete a user through email')
  .action((email)=>{
      deleteUser(email)
  })


program.parse(process.argv)




  









