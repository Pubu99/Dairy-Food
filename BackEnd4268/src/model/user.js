const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Email:{
        type: String,
    },
    MobileNO:{
        type: Number,
        required: true
    },
    UserName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
