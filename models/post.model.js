const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true,
        default: Date.now()
    },
    user_id: {
        type: String,
        require: true
    },
})

module.exports = model(`post`, postSchema);
