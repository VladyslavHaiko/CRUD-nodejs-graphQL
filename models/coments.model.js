const {model, Schema} = require('mongoose');

 const commentsSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    created_by: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: new Date.now()
    },
    timestamp: true,
})

export const commentModel = model(`comment`, commentsSchema);
