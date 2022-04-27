const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });

const URI = "mongodb://localhost:27017/" + process.env.DB_NAME;

exports.openConnexion = () => {
    mongoose.connect(URI)
        .then(() => {
            console.log("Connected!");
        })
        .catch((err) => {
            console.log("Something went wrong when trying to connect : \n" + err);
        });
}

exports.closeConnexion = () => {
    mongoose.disconnect()
        .then(() => {
            console.log("Disconnected!");
        })
        .catch((err) => {
            console.log("Something went wrong when trying to disconnected : \n" + err);
        });
}