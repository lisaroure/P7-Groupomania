const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const adminSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
);

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);