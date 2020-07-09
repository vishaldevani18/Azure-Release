var mongoose = require('mongoose');



let mongo_con = mongoose.connect('mongodb+srv://vishaldevani:VishalDevani@cluster0-j9txe.mongodb.net/Users?retryWrites=true&w=majority', {
    //  user: 'vishaldevani', pass:'VishalDevani',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(connect => console.log("connected with mongodb Atlas")).catch(err => {
    console.log("err", err)
});

module.exports = mongo_con;