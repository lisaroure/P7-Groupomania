const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const adminSchema = new mongoose.Schema({
    pseudo: { type: String, minlenght: 3, maxlength: 55, required: true, unique: true, trim: true },
    email: { type: String, required: true, validate: [isEmail], lowercase: true, unique: true, trim: true },
    password: { type: String, required: true, max: 1024, minlength: 8, maxlength: 10 },
},
    {
        timestamps: true,
    }
);

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);