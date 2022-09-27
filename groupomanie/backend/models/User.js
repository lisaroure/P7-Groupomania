const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    pseudo: { type: String, minlenght: 3, maxlenght: 55, required: true, unique: true, trim: true },
    email: { type: String, required: true, validate: [isEmail], lowercase: true, unique: true, trim: true },
    password: { type: String, required: true, max: 1024, minlenght: 8, maxlenght: 10 },
    picture: { type: String, default: "./uploads/profil/random-user.png" },
    bio: { type: String, max: 1024 },

},
    {
        timestamps: true,
    }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);