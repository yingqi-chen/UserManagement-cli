const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// connect to DB
const db = mongoose.connect('mongodb://localhost:27017/myImportantDates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});


module.exports = db






