const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema =  new Schema({
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    student: {
        type: Object,
        required: false
    }
})

module.exports = Comment = mongoose.model("comment", CommentSchema);