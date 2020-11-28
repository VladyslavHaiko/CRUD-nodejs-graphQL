const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    password: {
        type:String,
        require: true
    },
})

module.exports.UserModel = model(`user`, userSchema);
