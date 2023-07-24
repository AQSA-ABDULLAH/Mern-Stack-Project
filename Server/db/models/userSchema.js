const mongoose = require('mongoose');

// -------------USERSCHEMA-------------
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phoneno:{
        type : Number,
        required : true
    },
    work:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    cpassword:{
        type : String,
        required : true
    }

})

// --------------MODELS-------------
const User = mongoose.model('USER', userSchema);

module.exports = User;