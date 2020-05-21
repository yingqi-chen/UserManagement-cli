const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/myImportantDates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

mongoose.Promise = global.Promise;

console.log("hello")


