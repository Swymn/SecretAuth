const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "ERROR: User must have a name."]
    },
    password: {
        type: String,
        required: [true, "ERROR: User must have a password."]
    }
});

exports.User = mongoose.model(process.env.DB_COLLECTION_USER, userSchema);