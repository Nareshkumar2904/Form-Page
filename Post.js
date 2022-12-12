const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
    address1: {
        type: String,
    },
    address2: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    zip: {
        type: Number,
    },
    phone: {
        type: Number,
    }
})

module.exports = mongoose.model('Posts', postSchema);