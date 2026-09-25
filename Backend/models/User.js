const mongoose = require("mongoose")
const UserModal = new mongoose.Schema({
    fullname: {
        required: true,
        type: String
    },
    email: {
        unique: true,
        type: String,
        trim: true,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model("User", UserModal);