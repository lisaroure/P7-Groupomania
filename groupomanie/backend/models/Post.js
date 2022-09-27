const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    message: { type: String, trim: true, maxlength: 500 },
    imageUrl: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
    comments: {
        type: [{ commenterId: String, commenterPseudo: String, text: String, timestamp: Number }],
        required: true,
    },
},
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Post', postSchema);