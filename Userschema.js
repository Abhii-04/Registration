const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab4')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));
const userschema = new mongoose.Schema({
    name:String, 
    age : Number,
    dob : Date,
    email : String,
    password : String,
});

const user = mongoose.model('User', userschema);
module.exports = user;