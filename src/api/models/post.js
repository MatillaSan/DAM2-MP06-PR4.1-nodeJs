const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true // Assegura que cada usuari te un ID únic
    },
    title: String,
    score: Number,
    viewCount: Number,
    commentCount: Number,
    creationDate: Date,
    answerCount: Number,
    tags: [String],
    ownerUserId: Number
});

// Compila i exporta el model Post
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;