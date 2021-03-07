const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    orgid: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('tableivo', signUpTemplate)