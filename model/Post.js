const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "ERROR: Post must have a title."]
    },
    content: {
        type: String,
        required: [true, "ERROR: Post must have a content."]
    }
});

exports.Post = mongoose.model(process.env.DB_COLLECTION_POST, postSchema);