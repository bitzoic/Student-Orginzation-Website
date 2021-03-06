const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema =  new Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    university: {
        type: String
    },
    rsos: {
        rso:{
            type: String
        }
    }
})

module.exports = Admin = mongoose.model("admin", AdminSchema);