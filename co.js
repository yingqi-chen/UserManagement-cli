const { program } = require('commander');
const {addUser,listAllUsers,findUserByEmail,updateUser,deleteUser} = require('./model_methods/user_methods')


program
.version('0.0.1')
.description("testing");


program
    .command('list')
    .description('List all users')
    .action(() =>{
      listAllUsers()
    })


program
    .command('start')
    .description('start a quiz')
    .action(() => {
      console.log('start')
    })

program.parse(process.argv)

  

