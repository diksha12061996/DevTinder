const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://diksha1206:diksha1206@nodejs.lb9f95x.mongodb.net/devTinder");
};
module.exports = connectDB;
